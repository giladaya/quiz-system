import React from "react";
import "./App.css";
import Quiz from "../Quiz";
import { QuizData, QuizAnswers } from "../Quiz/types";
import * as Api from "../../services/dataApi";

function App() {
  const handleSubmit = React.useCallback((answers: QuizAnswers) => {
    console.log({ answers });
  }, []);

  const [data, setData] = React.useState<QuizData>();

  React.useEffect(() => {
    Api.fetchQuestions().then(data => {
      setData(data);
    });
  }, [setData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">Da Quizzzzz</header>
      <main className="App-main">
        <Quiz data={data} onSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default App;
