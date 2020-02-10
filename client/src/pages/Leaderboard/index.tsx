import React from "react";
import { LeaderboardEntry } from "../../types";
import * as Api from "../../services/dataApi";

export default function() {
  const [data, setData] = React.useState<LeaderboardEntry[]>();

  React.useEffect(() => {
    Api.fetchLeaderboard().then(data => {
      setData(data);
    });
  }, [setData]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <h1>Leaderboard</h1>
      <ol>
        {data.map((entry, idx) => (
          <li key={`lb${idx}`}>
            {entry.name}: {entry.score}
          </li>
        ))}
      </ol>
    </main>
  );
}
