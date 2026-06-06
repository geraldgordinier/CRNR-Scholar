import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { UserStats, Category, TestType } from '../types';
import { CNRN_CATEGORIES } from '../data';
import { Award, Target, Activity } from 'lucide-react';

interface DashboardProps {
  stats: UserStats;
  onStartTest: (type: TestType, category?: Category | 'Mixed') => void;
}

export function Dashboard({ stats, onStartTest }: DashboardProps) {
  // Compute chart data
  const chartData = CNRN_CATEGORIES.map(category => {
    const data = stats.categoryStats[category] || { attempted: 0, correct: 0 };
    const percentage = data.attempted > 0 ? Math.round((data.correct / data.attempted) * 100) : 0;
    return {
      name: category.replace(' ', '\n'), // break line for chart labels
      category: category,
      score: percentage,
      attempted: data.attempted,
      correct: data.correct,
      fill: '#1A1A1A'
    };
  });

  const totalAttempted = Object.values(stats.categoryStats).reduce((sum, curr) => sum + curr.attempted, 0);
  const totalCorrect = Object.values(stats.categoryStats).reduce((sum, curr) => sum + curr.correct, 0);
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      <div className="mb-10 border-b border-ink pb-4">
        <h1 className="text-4xl font-serif text-ink">Dashboard</h1>
        <p className="text-[13px] uppercase tracking-widest opacity-60 mt-4">Your current progress and performance metrics</p>
      </div>

      {/* High Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink bg-white">
        <div className="p-8 border-b md:border-b-0 md:border-r border-ink">
          <p className="text-[13px] uppercase tracking-widest font-bold opacity-50 mb-2">Overall Accuracy</p>
          <p className="font-serif text-4xl leading-none">{overallAccuracy}%</p>
        </div>
        <div className="p-8 border-b md:border-b-0 md:border-r border-ink">
          <p className="text-[13px] uppercase tracking-widest font-bold opacity-50 mb-2">Questions</p>
          <p className="font-serif text-4xl leading-none">{totalAttempted}</p>
        </div>
        <div className="p-8">
          <p className="text-[13px] uppercase tracking-widest font-bold opacity-50 mb-2">Tests Taken</p>
          <p className="font-serif text-4xl leading-none">{stats.recentScores.length}</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white border border-ink p-8">
        <h2 className="text-2xl font-serif mb-6 border-b border-ink pb-3">Proficiency by Category</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 85 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
              <XAxis 
                dataKey="category" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#1A1A1A', fontSize: 10, fontWeight: 'bold' }}
                interval={0}
                angle={-45}
                textAnchor="end"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#1A1A1A', fontSize: 10 }}
                domain={[0, 100]}
                tickFormatter={(val) => `${val}%`}
              />
              <Tooltip 
                cursor={{ fill: '#F2EFE9' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-4 border border-ink text-sm">
                        <p className="font-bold text-ink uppercase tracking-widest text-[13px] mb-2">{data.category}</p>
                        <p className="font-serif text-xl">Score: {data.score}%</p>
                        <p className="text-ink opacity-60 text-[13px] mt-1">{data.correct} / {data.attempted} correct</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="score" maxBarSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {totalAttempted === 0 && (
           <div className="flex justify-center mt-4">
              <p className="text-slate-500 text-sm">No data yet. Take a test to see your proficiency graph!</p>
           </div>
        )}
      </div>

    </div>
  );
}
