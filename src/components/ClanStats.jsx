import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ClanStats = () => {
  const { tag } = useParams();
  const [clan, setClan] = useState(null);
  const serverUrl = 'https://clash-of-clans-stats.onrender.com';

  useEffect(() => {
    axios.get(`${serverUrl}/clan/${tag}`)
      .then((response) => setClan(response.data))
      .catch((error) => console.error(error));
  }, [tag]);

  if (!clan) return <div>Loading...</div>;

  return (
    <div className="p-5 bg-white shadow rounded">
      <h2 className="text-2xl font-bold">Clan: {clan.name}</h2>
      <p>Level: {clan.clanLevel}</p>
      <p>War Wins: {clan.warWins}</p>
      <p>Members: {clan.members}</p>
    </div>
  );
};

export default ClanStats;