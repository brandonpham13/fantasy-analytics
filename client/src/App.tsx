import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home';
import TeamIdPage from './pages/teamIdRetrieval';
import StatChart from './components/teamchart';

function App() {
    const [teamId, setTeamId] = useState('');

    return (
      <Router>
        <div className="App">
          {/* NAV BAR */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/team-id">Team ID Retrieval</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/team-id" element={<TeamIdPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
