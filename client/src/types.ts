export interface QuestionData {
  question: string;
  answers: string[];
}
export interface QuizData {
  questions: QuestionData[];
}
export type QuizAnswers = number[];
export interface QuizResults {
  score: number;
  tempName: string | null;
  isTop: boolean;
}
