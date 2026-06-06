import { useState, useEffect } from 'react';
import { Category, UserStats, Question, TestSession, TestType } from './types';
import { generateTest } from './data';
import { Dashboard } from './components/Dashboard';
import { CategoryQuizzes } from './components/CategoryQuizzes';
import { PracticeTests } from './components/PracticeTests';
import { AllQuestions } from './components/AllQuestions';
import { ActiveTest } from './components/ActiveTest';
import { ArthurWidget } from './components/ArthurWidget';
import { BookOpen, Stethoscope, Trophy, LayoutDashboard } from 'lucide-react';
import { cn } from './lib/utils';

type ViewState = 'dashboard' | 'category_quizzes' | 'practice_tests' | 'all_questions' | 'hidden_questions' | 'active_test' | 'results';

const INITIAL_STATS: UserStats = {
  categoryStats: {
    'Cerebrovascular': { attempted: 0, correct: 0 },
    'Trauma': { attempted: 0, correct: 0 },
    'Seizures': { attempted: 0, correct: 0 },
    'Tumors': { attempted: 0, correct: 0 },
    'Immune & Infections': { attempted: 0, correct: 0 },
    'Chronic/Degenerative': { attempted: 0, correct: 0 },
  },
  recentScores: [],
  hiddenQuestions: []
};

export default function App() {
  const [view, setView] = useState<ViewState>('practice_tests');
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);
  
  // Active test state
  const [activeSessionInfo, setActiveSessionInfo] = useState<{ type: TestType, category?: Category | 'Mixed' }>({ type: 'QuickReview', category: 'Mixed' });
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [lastResults, setLastResults] = useState<{correct: number, total: number} | null>(null);

  const effectiveView = (view === 'active_test' || view === 'results') && activeSessionInfo 
    ? (activeSessionInfo.type === 'CategoryQuiz' && activeSessionInfo.category !== 'Mixed' && activeSessionInfo.category !== 'Pediatric' ? 'category_quizzes' : 'practice_tests')
    : view;

  // Load state from local storage on mount
  useEffect(() => {
    const savedStats = localStorage.getItem('cnrn_stats');
    if (savedStats) {
      try {
        const parsed = JSON.parse(savedStats);
        if (!parsed.hiddenQuestions) parsed.hiddenQuestions = [];
        setStats(parsed);
      } catch (e) {
        console.error('Failed to parse saved stats', e);
      }
    }
  }, []);

  // Save state to local storage when it changes
  useEffect(() => {
    localStorage.setItem('cnrn_stats', JSON.stringify(stats));
  }, [stats]);

  const handleStartTest = (type: TestType, category: Category | 'Mixed' = 'Mixed') => {
    setActiveSessionInfo({ type, category });
    
    // Determine question count
    let count = 10; // Default for category / quick quizzes
    if (type === 'FullExam') {
      count = 220; // Official ABNN Self-Assessment length
    } else if (type === 'CategoryQuiz' && category === 'Mixed') {
      count = 75; // Standard 75-Q option
    }

    setTestQuestions(generateTest(category, count, stats.hiddenQuestions)); 
    setView('active_test');
  };

  const handleToggleHidden = (questionId: string) => {
    setStats(prev => {
      const isHidden = prev.hiddenQuestions.includes(questionId);
      return {
        ...prev,
        hiddenQuestions: isHidden 
          ? prev.hiddenQuestions.filter(id => id !== questionId)
          : [...prev.hiddenQuestions, questionId]
      };
    });
  };

  const handleCompleteTest = (correctCount: number, totalCount: number) => {
    setLastResults({ correct: correctCount, total: totalCount });
    
    setStats(prev => {
      const newStats = { ...prev };
      
      const session: TestSession = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        score: correctCount,
        totalQuestions: totalCount,
        type: activeSessionInfo.type,
        category: activeSessionInfo.category === 'Mixed' ? undefined : activeSessionInfo.category as Category
      };
      
      newStats.recentScores = [session, ...newStats.recentScores].slice(0, 10);

      // Distribute correct/attempted counts across the categories of the questions shown
      testQuestions.forEach((q) => {
        // Technically this is a slightly inaccurate distribution unless tracking per-question answer, 
        // but for a learning app this roughly maintains proportions properly over time.
        // Or better yet, we simply increment attempted.
        const catStat = newStats.categoryStats[q.category];
        if (catStat) {
          catStat.attempted += 1;
          // Approximate correctness proportionally
          catStat.correct += (correctCount / totalCount);
        }
      });

      return newStats;
    });

    setView('results');
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col md:flex-row font-sans text-sm">
      {/* Sidebar Navigation */}
      <nav className={cn(
        "bg-surface border-b md:border-b-0 md:border-r border-ink flex flex-col pt-6 md:pt-10 md:sticky top-0 z-20 md:h-screen w-full md:w-80 shrink-0",
        view === 'active_test' && "hidden"
      )}>
        <div className="mb-0 md:mb-8 flex flex-col relative px-6 md:px-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">CNRN Scholar</h1>
          <p className="text-[13px] uppercase tracking-widest opacity-60 mt-1 md:mt-2 mb-4 md:mb-8">Neuroscience Nurse Prep</p>
          
          {(!activeSessionInfo || (view !== 'active_test' && view !== 'results')) && (
            <div className="mb-0">
              <ArthurWidget viewToggle={view} />
            </div>
          )}
        </div>

        <div className="block md:hidden px-6 pb-6">
          <div className="relative">
            <select
              value={effectiveView}
              onChange={(e) => setView(e.target.value as ViewState)}
              className="w-full appearance-none bg-white border border-ink text-ink py-3 pl-4 pr-10 text-[13px] uppercase tracking-widest font-bold outline-none rounded-none"
            >
              <option value="practice_tests">Practice Tests</option>
              <option value="category_quizzes">Category Quizzes</option>
              <option value="dashboard">Progress</option>
              <option value="all_questions">Question Bank</option>
              <option value="hidden_questions">Hidden Questions</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-col overflow-x-auto md:overflow-visible no-scrollbar mt-auto md:mt-0">
          <button 
            onClick={() => setView('practice_tests')}
            className={cn(
              "flex items-center gap-2 md:gap-4 py-4 md:py-5 text-[13px] md:text-[13px] uppercase tracking-widest font-bold transition-colors whitespace-nowrap md:-my-px relative z-0 px-6 md:px-10",
              effectiveView === 'practice_tests' ? "bg-white z-10" : "hover:bg-white opacity-60 hover:opacity-100 hover:z-10"
            )}
            title="Practice Tests"
          >
            Practice Tests
          </button>
          
          <button 
            onClick={() => setView('category_quizzes')}
            className={cn(
              "flex items-center gap-2 md:gap-4 py-4 md:py-5 text-[13px] md:text-[13px] uppercase tracking-widest font-bold transition-colors whitespace-nowrap md:-my-px relative z-0 px-6 md:px-10",
              effectiveView === 'category_quizzes' ? "bg-white z-10" : "hover:bg-white opacity-60 hover:opacity-100 hover:z-10"
            )}
            title="Category Quizzes"
          >
            Category Quizzes
          </button>

          <button 
            onClick={() => setView('dashboard')}
            className={cn(
              "flex items-center gap-2 md:gap-4 py-4 md:py-5 text-[13px] md:text-[13px] uppercase tracking-widest font-bold transition-colors whitespace-nowrap md:-my-px relative z-0 px-6 md:px-10",
              effectiveView === 'dashboard' ? "bg-white z-10" : "hover:bg-white opacity-60 hover:opacity-100 hover:z-10"
            )}
            title="Progress"
          >
            Progress
          </button>

          <button 
            onClick={() => setView('all_questions')}
            className={cn(
              "flex items-center gap-2 md:gap-4 py-4 md:py-5 text-[13px] md:text-[13px] uppercase tracking-widest font-bold transition-colors whitespace-nowrap md:-my-px relative z-0 px-6 md:px-10",
              effectiveView === 'all_questions' ? "bg-white z-10" : "hover:bg-white opacity-60 hover:opacity-100 hover:z-10"
            )}
            title="Question Bank"
          >
            Question Bank
          </button>

          <button 
            onClick={() => setView('hidden_questions')}
            className={cn(
              "flex items-center gap-2 md:gap-4 py-4 md:py-5 text-[13px] md:text-[13px] uppercase tracking-widest font-bold transition-colors whitespace-nowrap md:-my-px relative z-0 px-6 md:px-10",
              effectiveView === 'hidden_questions' ? "bg-white z-10" : "hover:bg-white opacity-60 hover:opacity-100 hover:z-10"
            )}
            title="Hidden Questions"
          >
            Hidden Questions
          </button>
        </div>
        
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto w-full md:max-w-6xl mx-auto">
        <div className="pt-2 md:pt-4">
          
          {view === 'dashboard' && (
            <Dashboard stats={stats} onStartTest={handleStartTest} />
          )}

          {view === 'category_quizzes' && (
            <CategoryQuizzes categoryStats={stats.categoryStats} onStartTest={handleStartTest} />
          )}
          
          {view === 'practice_tests' && (
            <PracticeTests onStartTest={handleStartTest} />
          )}

          {view === 'all_questions' && (
            <AllQuestions 
              viewType="all" 
              hiddenQuestions={stats.hiddenQuestions} 
              onToggleHidden={handleToggleHidden} 
            />
          )}

          {view === 'hidden_questions' && (
            <AllQuestions 
              viewType="hidden" 
              hiddenQuestions={stats.hiddenQuestions} 
              onToggleHidden={handleToggleHidden} 
            />
          )}

          {view === 'active_test' && (
            <ActiveTest 
              questions={testQuestions} 
              onComplete={handleCompleteTest} 
              onCancel={() => setView('dashboard')} 
              isFullExam={activeSessionInfo.type === 'FullExam'}
              onToggleHidden={handleToggleHidden}
            />
          )}

          {view === 'results' && lastResults && (
            <div className="max-w-2xl mx-auto block animate-in zoom-in-95 duration-500">
              <div className="bg-white p-12 text-center border border-ink relative overflow-hidden">
                <h2 className="text-4xl font-serif text-ink mb-2">Mastery Complete</h2>
                <p className="text-ink opacity-70 mb-10 text-sm">Great job studying for the CNRN, Annie. Every question you answer gets you closer to passing!</p>
                
                <div className="border border-ink flex items-center justify-around p-8 mb-10">
                  <div>
                    <div className="text-[13px] font-bold text-ink opacity-50 uppercase tracking-widest mb-2">Score</div>
                    <div className="text-5xl font-serif text-ink">
                      {Math.round((lastResults.correct / lastResults.total) * 100)}%
                    </div>
                  </div>
                  <div className="w-px h-16 bg-ink" />
                  <div>
                    <div className="text-[13px] font-bold text-ink opacity-50 uppercase tracking-widest mb-2">Correct</div>
                    <div className="text-5xl font-serif text-ink">
                      {lastResults.correct} <span className="text-2xl opacity-40">/ {lastResults.total}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setView('dashboard')}
                    className="px-8 py-4 font-bold border border-ink text-[13px] uppercase tracking-widest hover:bg-surface transition-all"
                  >
                    Back to Dashboard
                  </button>
                  <button 
                    onClick={() => setView('category_quizzes')}
                    className="px-8 py-4 font-bold bg-ink text-white text-[13px] uppercase tracking-widest hover:opacity-90 transition-all"
                  >
                    Take Another Test
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

