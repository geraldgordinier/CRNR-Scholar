import { useState, useEffect } from 'react';
import { Question } from '../types';
import { cn } from '../lib/utils';
import { ArthurMascot } from './ArthurMascot';

interface ActiveTestProps {
  questions: Question[];
  onComplete: (correctCount: number, totalCount: number, timeSpentSecs: number) => void;
  onCancel: () => void;
  isFullExam?: boolean;
  onToggleHidden: (id: string) => void;
}

export function ActiveTest({ questions, onComplete, onCancel, isFullExam, onToggleHidden }: ActiveTestProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showConfirmHide, setShowConfirmHide] = useState(false);

  // Timer state (4 hours = 14400 seconds)
  const [timeLeft, setTimeLeft] = useState(14400); 
  const [isTimerVisible, setIsTimerVisible] = useState(true);

  useEffect(() => {
    if (!isFullExam) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          onComplete(correctCount, questions.length, 14400); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isFullExam, correctCount, questions.length, onComplete]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  
  const question = questions[currentIndex];
  const isCorrect = selectedOption === question?.correctAnswerIndex;

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === question.correctAnswerIndex) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setShowConfirmHide(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onComplete(correctCount, questions.length, 14400 - timeLeft); 
    }
  };

  if (currentIndex >= questions.length || !question) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-6 md:space-y-12 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-2 md:mb-4 flex items-center justify-between border-b border-ink pb-3 md:pb-4">
        <button 
          onClick={onCancel}
          className="text-ink hover:opacity-70 flex items-center gap-1 text-[13px] font-bold uppercase tracking-widest transition-colors"
        >
          &larr; Quit Session
        </button>
        <div className="flex items-center gap-4">
          {isFullExam && (
            <div className="flex items-center gap-2">
              {isTimerVisible && (
                <span className="font-mono text-sm font-bold bg-surface px-2 py-1 border border-ink">
                  {formatTime(timeLeft)}
                </span>
              )}
              <button 
                onClick={() => setIsTimerVisible(!isTimerVisible)}
                className="text-[13px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                {isTimerVisible ? 'Hide Timer' : 'Show Timer'}
              </button>
            </div>
          )}
          <span className="text-[13px] font-bold uppercase tracking-widest opacity-60">
            Practice Test
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Progress & Category */}
        <div className="mb-4 md:mb-8 flex flex-wrap md:items-center gap-2 md:gap-4 text-[13px] uppercase tracking-widest font-bold">
          <span className="bg-ink text-white px-2 py-1 md:px-3 md:py-1">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="opacity-50 flex items-center gap-2 py-1">
            Category: {question.category}
            {question.isPediatric && (
              <span className="bg-surface text-ink border border-ink px-2 py-0.5 ml-1 md:ml-2">Pediatric</span>
            )}
          </span>
        </div>

        {/* Question Text */}
        <h2 className="font-sans text-[18px] font-semibold leading-snug mb-6 text-black">
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-3 md:space-y-4">
          {question.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isActuallyCorrect = idx === question.correctAnswerIndex;
            
            let btnClass = "border border-ink bg-white hover:bg-surface";
            let indicatorClass = "border border-ink bg-white text-ink group-hover:bg-ink group-hover:text-white";
            
            if (isAnswered) {
              if (isActuallyCorrect) {
                // Editorial style: Correct is indicated by thick left border
                btnClass = "border border-ink bg-white border-l-8 border-l-ink";
                indicatorClass = "bg-ink text-white";
              } else if (isSelected) {
                // Incorrect selection
                btnClass = "border border-ink bg-surface border-l-8 border-l-red-800 opacity-80 text-red-900";
                indicatorClass = "bg-red-800 text-white";
              } else {
                btnClass = "border border-ink bg-transparent opacity-40";
                indicatorClass = "border border-ink";
              }
            } else if (isSelected) {
              btnClass = "border border-ink bg-surface border-l-8 border-l-ink";
              indicatorClass = "bg-ink text-white";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={cn(
                  "w-full text-left p-4 md:p-5 flex items-center gap-3 md:gap-4 transition-colors group cursor-pointer disabled:cursor-default",
                  btnClass
                )}
              >
                <span className={cn(
                  "w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-serif text-[13px] md:text-sm transition-colors flex-shrink-0",
                  indicatorClass
                )}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-[15px] text-black leading-relaxed">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Rationale and Actions */}
        <div className="mt-3 md:mt-4">
          {isAnswered && (
            <div className="animate-in fade-in duration-300">
              <div className="bg-white border border-ink p-4 mb-4">
                <h3 className="font-serif text-lg md:text-xl mb-2 text-black">
                  {isCorrect ? 'Correct' : 'Incorrect'}
                </h3>
                <p className="text-[15px] text-black leading-relaxed">
                  {question.rationale}
                </p>
              </div>
              
              <div className="flex justify-between pt-2 border-t-0">
                <div className="relative group/hide">
                  {showConfirmHide ? (
                    <div className="absolute bottom-full left-0 mb-2 w-64 bg-white border border-red-900 shadow-xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                      <p className="text-[13px] text-ink mb-3 leading-relaxed">Are you sure you want to hide this question? You won't see it in future tests unless you unhide it.</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => {
                            setShowConfirmHide(false);
                            onToggleHidden(question.id);
                            const toast = document.createElement('div');
                            toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-ink text-white px-6 py-3 text-[13px] uppercase tracking-widest font-bold shadow-lg animate-in fade-in zoom-in slide-in-from-bottom-4 z-50 rounded-sm pointer-events-none text-center';
                            toast.innerText = 'Question hidden. Unhide from Hidden Questions section.';
                            document.body.appendChild(toast);
                            setTimeout(() => {
                              toast.classList.add('fade-out', 'zoom-out');
                              setTimeout(() => toast.remove(), 300);
                            }, 4000);
                            handleNext();
                          }}
                          className="flex-1 bg-red-900 text-white font-bold text-[13px] uppercase tracking-widest py-2 px-3 hover:opacity-90 transition-opacity cursor-pointer text-center"
                        >
                          Hide Selected
                        </button>
                        <button 
                          onClick={() => setShowConfirmHide(false)}
                          className="flex-1 border border-ink text-ink font-bold text-[13px] uppercase tracking-widest py-2 px-3 hover:bg-surface cursor-pointer text-center"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowConfirmHide(true)}
                      className="px-4 md:px-6 py-2 md:py-3 border border-red-900 text-red-900 font-bold text-[13px] uppercase tracking-widest hover:bg-red-900 hover:text-white transition-colors cursor-pointer"
                      title="Hide Question. You can unhide from the Hidden Questions section."
                    >
                      Hide Question
                    </button>
                  )}
                </div>
                <button
                  onClick={handleNext}
                  className="px-8 py-3 md:px-10 md:py-4 bg-ink text-white font-bold text-[13px] uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
