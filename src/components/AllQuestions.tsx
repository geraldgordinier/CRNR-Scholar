import React, { useState } from 'react';
import { QUESTIONS } from '../data';
import { cn } from '../lib/utils';
import { ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';

interface AllQuestionsProps {
  viewType: 'all' | 'hidden';
  hiddenQuestions: string[];
  onToggleHidden: (id: string) => void;
}

export function AllQuestions({ viewType, hiddenQuestions, onToggleHidden }: AllQuestionsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const displayedQuestions = QUESTIONS.filter(q => 
    viewType === 'hidden' ? hiddenQuestions.includes(q.id) : !hiddenQuestions.includes(q.id)
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="mb-10 border-b border-ink pb-4">
        <h1 className="text-4xl font-serif text-ink">
          {viewType === 'hidden' ? 'Hidden Questions' : 'Question Bank'}
        </h1>
        <p className="text-[13px] uppercase tracking-widest opacity-60 mt-4">
          {viewType === 'hidden' 
            ? `Viewing ${displayedQuestions.length} hidden questions` 
            : `Table of all ${displayedQuestions.length} active practice questions`}
        </p>
      </div>
      
      <div className="border border-ink overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-ink text-white">
                <th className="p-4 text-[13px] uppercase tracking-widest w-16">No.</th>
                <th className="p-4 text-[13px] uppercase tracking-widest w-48">Category</th>
                <th className="p-4 text-[13px] uppercase tracking-widest">Question Text</th>
                <th className="p-4 text-[13px] uppercase tracking-widest w-24">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {displayedQuestions.map((q, i) => {
                const isExpanded = expandedId === q.id;
                const isHidden = hiddenQuestions.includes(q.id);
                return (
                  <React.Fragment key={q.id}>
                    <tr 
                      className={cn(
                        "border-t border-surface transition-colors hover:bg-surface cursor-pointer",
                        isExpanded && "bg-surface"
                      )}
                      onClick={() => toggleExpand(q.id)}
                    >
                      <td className="p-4 align-top font-mono">{i + 1}</td>
                      <td className="p-4 align-top">
                        <span className="flex flex-col items-start gap-1">
                          <span className="text-[13px] uppercase bg-ink/10 text-ink px-2 py-1 tracking-wider">{q.category}</span>
                          {q.isPediatric && (
                            <span className="text-[13px] uppercase bg-surface border border-ink text-ink px-2 py-1 tracking-wider">Pediatric</span>
                          )}
                        </span>
                      </td>
                      <td className="p-4 align-top font-serif text-base pr-8">{q.text}</td>
                      <td className="p-4 align-top text-right">
                        <button className="p-2 hover:bg-ink hover:text-white transition-colors border border-transparent hover:border-ink rounded-full">
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr className="bg-white border-t border-surface/50">
                        <td colSpan={4} className="p-0">
                          <div className="p-6 md:p-8 bg-surface/30 pl-24 border-l-4 border-ink">
                            <h4 className="text-[13px] uppercase font-bold tracking-widest opacity-60 mb-4">Options & Answer</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                              {q.options.map((opt, idx) => (
                                <div key={idx} className={cn(
                                  "p-3 border text-[13px] text-black",
                                  idx === q.correctAnswerIndex ? "border-ink bg-white font-bold" : "border-ink/20 opacity-70"
                                )}>
                                  <span className="font-serif mr-2">{String.fromCharCode(65 + idx)}</span>
                                  {opt}
                                </div>
                              ))}
                            </div>
                            <div className="bg-white border text-[13px] text-black p-4 leading-relaxed mb-6">
                              <span className="font-bold text-[13px] uppercase tracking-widest block mb-2 opacity-60 text-ink">Rationale</span>
                              {q.rationale}
                            </div>
                            <div className="flex justify-end">
                              <button 
                                onClick={(e) => { e.stopPropagation(); onToggleHidden(q.id); }}
                                className="flex items-center gap-2 px-4 py-2 text-[13px] uppercase tracking-widest font-bold border border-ink hover:bg-ink hover:text-white transition-colors"
                              >
                                {isHidden ? <><Eye size={16} /> Unhide Question</> : <><EyeOff size={16} /> Hide Question</>}
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
