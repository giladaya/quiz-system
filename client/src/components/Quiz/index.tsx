import React, { FormEvent } from "react";
import { QuizData, QuizAnswers } from "../../types";
import Question from "./Question";
interface Props {
  data: QuizData;
  onSubmit: (formData: QuizAnswers) => void;
}
export default function Quiz(props: Props) {
  const { data, onSubmit } = props;

  const handleSubmit = React.useCallback((ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const qCount = data.questions.length;
    const base = new Array(qCount).fill(0);
    const formData: QuizAnswers = base.map((_v, idx) => {
      const key = `Q${idx}`;
      const fields = ev.target as any; // TODO
      const answer = fields[key] ? fields[key].value : -1;
      return answer;
    });
    onSubmit(formData);
  }, [data.questions.length, onSubmit]);

  return (
    <form onSubmit={handleSubmit}>
      {data.questions.map((question, idx) => (
        <Question data={question} qnumber={idx} key={`Q${idx}`}/>
      ))}
      <br/>
      <input type="submit" value="Submit" />
    </form>
  );
}
