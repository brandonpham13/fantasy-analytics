import React, { useState } from 'react';
import getTeamId from '../services/getTeamId';  // Adjust the path according to where you saved the function

const TeamIdPage = () => {
  const [teamAbbreviation, setTeamAbbreviation] = useState<string>('');
  const [teamId, setTeamId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetchTeamId = async () => {
    setLoading(true);
    const id = await getTeamId(teamAbbreviation);
    setTeamId(id);
    setLoading(false);
  };

  return (
    <div>
      <h1>Retrieve Team ID</h1>
      <input
        type="text"
        value={teamAbbreviation}
        onChange={(e) => setTeamAbbreviation(e.target.value.toUpperCase())}
        placeholder="Enter Team Abbreviation (e.g., ARI)"
      />
      <button onClick={handleFetchTeamId} disabled={loading || !teamAbbreviation}>
        {loading ? 'Fetching...' : 'Get Team ID'}
      </button>

      {teamId && (
        <div>
          <h2>Team ID: {teamId}</h2>
        </div>
      )}
    </div>
  );
};

export default TeamIdPage;
