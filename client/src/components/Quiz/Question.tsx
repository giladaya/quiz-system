import React from "react";
import { QuestionData } from "./types";

interface Props {
  data: QuestionData;
  qnumber: number;
}
export default function(props: Props) {
  const { data, qnumber } = props;

  return (
    <section>
      <h2>
        {`Q${qnumber}`}:&nbsp; 
        {data.question}
      </h2>
      <ol>
        {data.answers.map((answer, idx) => (
          <li key={`A${idx}`}>
            <label>
              <input type="radio" name={`Q${qnumber}`} value={idx} />
              {answer}
            </label>
          </li>
        ))}
      </ol>
    </section>
  );
}
