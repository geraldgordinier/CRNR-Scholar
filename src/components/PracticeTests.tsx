import { TestType } from '../types';

interface PracticeTestsProps {
  onStartTest: (type: TestType, category?: 'Mixed') => void;
}

export function PracticeTests({ onStartTest }: PracticeTestsProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="mb-10 border-b border-ink pb-4">
        <h1 className="text-4xl font-serif text-ink">Practice Tests</h1>
        <p className="text-[13px] uppercase tracking-widest opacity-60 mt-4">Full-length and mini assessments to build exam endurance</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8">
        <button 
          onClick={() => onStartTest('FullExam', 'Mixed')}
          className="bg-ink p-10 text-white flex flex-col md:flex-row md:items-center justify-between group relative text-left cursor-pointer hover:bg-[#222] transition-colors"
        >
          <div className="flex-1 mb-6 md:mb-0 pr-8">
            <div className="text-[13px] uppercase font-bold tracking-widest opacity-60 mb-2 group-hover:opacity-100 transition-opacity">Simulated Exam</div>
            <h3 className="text-3xl font-serif mb-4">Best-Attempt CNRN Simulation</h3>
            <p className="text-[13px] opacity-70 leading-relaxed max-w-2xl group-hover:opacity-100 transition-opacity">
              A 220-question, 4-hour timed simulation designed to mirror the actual CNRN testing environment. (Note: Question categories are generated from our available bank, so distribution may not match the official exam exactly).
            </p>
          </div>
          <div className="bg-white text-ink font-bold py-5 px-10 text-[13px] uppercase tracking-widest group-hover:bg-surface transition-colors whitespace-nowrap text-center">
            Start 220-Q Exam
          </div>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => onStartTest('QuickReview', 'Mixed')}
            className="border border-ink p-8 text-ink flex flex-col justify-between bg-white text-left cursor-pointer hover:bg-surface transition-colors group"
          >
            <div className="mb-6">
              <div className="text-[13px] uppercase font-bold tracking-widest opacity-60 mb-2 group-hover:opacity-100 transition-opacity">Mini Quiz</div>
              <h3 className="text-2xl font-serif mb-2">Quick 20-Q Review</h3>
              <p className="text-[13px] opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity">
                A short assessment covering mixed topics.
              </p>
            </div>
            <div className="bg-ink text-white font-bold py-3 px-6 text-[13px] uppercase tracking-widest group-hover:opacity-90 transition-colors self-start text-center border border-ink">
              Start 20-Q Quiz
            </div>
          </button>

          <button 
            onClick={() => onStartTest('CategoryQuiz', 'Mixed')}
            className="border border-ink p-8 text-ink flex flex-col justify-between bg-white text-left cursor-pointer hover:bg-surface transition-colors group"
          >
            <div className="mb-6">
              <div className="text-[13px] uppercase font-bold tracking-widest opacity-60 mb-2 group-hover:opacity-100 transition-opacity">Mini Quiz</div>
              <h3 className="text-2xl font-serif mb-2">Standard 75-Q Review</h3>
              <p className="text-[13px] opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity">
                A solid mid-length assessment to test knowledge depth.
              </p>
            </div>
            <div className="border border-ink bg-white text-ink font-bold py-3 px-6 text-[13px] uppercase tracking-widest group-hover:bg-ink group-hover:text-white transition-colors self-start text-center">
              Start 75-Q Quiz
            </div>
          </button>
        </div>
        
        <button 
          onClick={() => onStartTest('CategoryQuiz', 'Pediatric' as any)}
          className="bg-surface border border-ink p-10 mt-2 text-ink flex flex-col md:flex-row md:items-center justify-between text-left cursor-pointer hover:bg-white transition-colors group"
        >
          <div className="flex-1 mb-6 md:mb-0 pr-8">
            <div className="text-[13px] uppercase font-bold tracking-widest opacity-60 mb-2 group-hover:opacity-100 transition-opacity">Specialty Review</div>
            <h3 className="text-3xl font-serif mb-4">Pediatric Focus Test</h3>
            <p className="text-[13px] opacity-70 leading-relaxed max-w-2xl group-hover:opacity-100 transition-opacity">
              A targeted review focusing specifically on pediatric neurological conditions, lifespan considerations, and developmental interventions.
            </p>
          </div>
          <div className="bg-ink text-white font-bold py-5 px-10 text-[13px] uppercase tracking-widest group-hover:opacity-90 transition-colors whitespace-nowrap text-center">
            Start Pediatric Test
          </div>
        </button>
      </div>
    </div>
  );
}
