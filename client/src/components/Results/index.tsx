import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import { QuizResults } from "../../types";

interface Props {
  data: QuizResults;
  onNameSubmit: (name: string) => void;
}
export default function Results(props: Props) {
  const { data, onNameSubmit } = props;
  return (
    <div>
      Your score is {data.score}
      <br />
      {data.isTop ? <Form onSubmit={onNameSubmit} /> : ""}
      <Link to="/leaderboard">Go to Leaderboard</Link>
    </div>
  );
}
