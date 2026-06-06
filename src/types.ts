export type Category = 
  | 'Cerebrovascular' 
  | 'Trauma' 
  | 'Seizures' 
  | 'Tumors' 
  | 'Immune & Infections' 
  | 'Chronic/Degenerative'
  | 'Professional Issues';

export interface Question {
  id: string;
  category: Category;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  rationale: string;
  isPediatric?: boolean;
}

export type TestType = 'FullExam' | 'QuickReview' | 'CategoryQuiz';

export interface TestSession {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  type: TestType;
  category?: Category;
}

export interface UserStats {
  categoryStats: Record<Category, { attempted: number; correct: number }>;
  recentScores: TestSession[];
  hiddenQuestions: string[];
}
