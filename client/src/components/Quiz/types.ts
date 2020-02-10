export interface QuestionData {
  question: string;
  answers: string[];
}
export interface QuizData {
  questions: QuestionData[];
}
export type QuizAnswers = number[];