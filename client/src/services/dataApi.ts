const BASE_URL = process.env.REACT_APP_API_URL;

export function fetchQuestions() {
  const url = `${BASE_URL}/questions`;
  return fetch(url)
    .then(data => data.json())
    .then(questions => ({ questions }));
}

export function submitAnswers(data: number[]) {
  const url = `${BASE_URL}/quiz`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(data => data.json());
}

export function submitName(tempName: string, realName: string) {
  const url = `${BASE_URL}/leaderboard/name/${tempName}`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: realName })
  }).then(data => data.json());
}
