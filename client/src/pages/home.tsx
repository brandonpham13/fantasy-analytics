import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../utils/teamList';

import StatChart from '../components/teamchart';


const HomePage = () => {
    const [teamAbbreviation, setTeamAbbreviation] = useState<string>('ARI');

    return (
        <div>
        <h1>Welcome to the Home Page!</h1>
        <div>
            <label>Select Team: </label>
            <select value={teamAbbreviation} onChange={(e) => setTeamAbbreviation(e.target.value)}>
            {teams.map((team) => (
                <option key={team.abbreviation} value={team.abbreviation}>
                    ({team.abbreviation}) {team.name}
                </option>
            ))}
            </select>
        </div>

        <StatChart teamAbbreviation={teamAbbreviation} />
        </div>
    );
};

export default HomePage;