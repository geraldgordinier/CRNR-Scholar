import { Category, TestType } from '../types';
import { CNRN_CATEGORIES } from '../data';

interface CategoryQuizzesProps {
  onStartTest: (type: TestType, category?: Category | 'Mixed') => void;
  categoryStats: Record<string, { attempted: number; correct: number }>;
}

export function CategoryQuizzes({ onStartTest, categoryStats }: CategoryQuizzesProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="mb-10 border-b border-ink pb-4">
        <h1 className="text-4xl font-serif text-ink">Quiz by Area of Knowledge</h1>
        <p className="text-[13px] uppercase tracking-widest opacity-60 mt-4">Select a category to focus your studies (10 questions each)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CNRN_CATEGORIES.map((category) => {
          const stats = categoryStats[category] || { attempted: 0, correct: 0 };
          const acc = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : null;
          
          return (
            <button 
              key={category} 
              onClick={() => onStartTest('CategoryQuiz', category)}
              className="bg-white p-6 md:p-8 border border-ink flex flex-col h-full hover:bg-surface transition-colors cursor-pointer text-left group"
            >
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-xl md:text-2xl font-serif text-ink mb-1 group-hover:underline">{category}</h3>
              </div>
              <div className="flex-1 w-full flex items-center gap-3 mt-1 mb-6">
                <p className="text-ink opacity-60 text-[13px] uppercase tracking-widest group-hover:opacity-100 transition-opacity">
                  {stats.attempted > 0 ? `${stats.attempted} answered` : 'No attempts yet'}
                </p>
                {acc !== null && (
                  <span className="text-[13px] uppercase font-bold tracking-widest bg-surface px-2 py-1 whitespace-nowrap">
                    {acc}% Acc
                  </span>
                )}
              </div>
              <div 
                className="w-full border border-ink bg-white text-ink font-bold py-3 md:py-4 px-4 text-[13px] uppercase tracking-widest group-hover:bg-ink group-hover:text-white transition-colors mt-auto text-center"
              >
                Practice
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
