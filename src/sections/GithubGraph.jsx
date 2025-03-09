import React, { useState, useEffect, useCallback } from 'react';
import ActivityCalendar from 'react-activity-calendar';
import { getContributionsByYear } from '../utilities/graphql'; 

const GithubGraph = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);

  const mapCountToLevel = (count) => {
    if (count === 0) return 0; 
    if (count <= 3) return 1; 
    if (count <= 7) return 2; 
    if (count <= 10) return 3; 
    return 4; 
  };
  const explicitTheme = {
    light: [ `#ebedf0`, `#c6e48b`, `#7bc96f`, `#239a3b`, `#196127`], 
    dark: [`#161b22`, `#0e4429`, `#006d32`, `#26a641`, `#39d353`], 
  };
  

  const fetchContributions = useCallback(async (year) => {
    const from = `${year}-01-01T00:00:00Z`;
    const to = `${year}-12-31T23:59:59Z`;

    setLoading(true);
    try {
      const weeks = await getContributionsByYear('BettyAfolabi', from, to);
      const contributions = weeks.flatMap((week) => week.contributionDays);
      setData(
        contributions.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: mapCountToLevel(day.contributionCount),
        }))
      );
    } catch (error) {
      console.error('Error fetching contributions:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContributions(selectedYear);
  }, [selectedYear, fetchContributions]);
  
  return (
    <div className='contribution py-20 lg:py-30'>
      <h1>Contribution Calendar</h1>
      <p>Here’s a visual representation of my coding activity on GitHub. Some days were productive, others... not so much. It’s all about progress!</p>

      {/* Contribution Calendar */}
      <div className="graph">
        {loading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <p>No contributions available for the selected year.</p>
        ) : (
          <ActivityCalendar data={data}
            theme={explicitTheme}
            labels={{
            tooltip: '<strong>{{count}} contributions</strong> on {{date}}',
          }}
          />
        )}
      </div>

      {/* Year Tabs */}
      <div className="tabs">
        {[ 2022, 2023, 2024, 2025].map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={selectedYear === year ? 'active' : ''}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GithubGraph;
