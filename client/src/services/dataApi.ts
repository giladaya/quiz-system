const BASE_URL = process.env.REACT_APP_API_URL;

export function fetchQuestions() {
  const url = `${BASE_URL}\\data\\questions.json`;
  return fetch(url).then(data => data.json());
}
