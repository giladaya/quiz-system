import React from "react";
import * as Api from "../../services/dataApi";
import { QuizData, QuizAnswers, QuizResults } from "../../types";
import QuizComponent from "../../components/Quiz";
import Results from "../../components/Results";

export default function Quiz() {
  const [data, setData] = React.useState<QuizData>();
  const [results, setResults] = React.useState<QuizResults | null>(null);

  const handleQuizSubmit = React.useCallback((answers: QuizAnswers) => {
    Api.submitAnswers(answers).then(res => {
      setResults(res);
    });
  }, []);

  const handleNameSubmit = React.useCallback((name: string) => {
    if (!results || !results.tempName) {
      return;
    }
    Api.submitName(results.tempName, name).then(res => {
      setResults(res);
    });
  }, [results]);

  React.useEffect(() => {
    Api.fetchQuestions().then(data => {
      setData(data);
    });
  }, [setData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="App-main">
      {results ? (
        <div>
          <h1>Results</h1>
          <Results data={results} onNameSubmit={handleNameSubmit}/>
        </div>
      ) : (
        <QuizComponent data={data} onSubmit={handleQuizSubmit} />
      )}
    </main>
  );
}
