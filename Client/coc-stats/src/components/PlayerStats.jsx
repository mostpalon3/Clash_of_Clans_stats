import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlayerStats = () => {
  const { tag } = useParams();
  const [player, setPlayer] = useState(null);
  const serverUrl = 'https://clash-of-clans-stats.onrender.com';

  useEffect(() => {
    axios.get(`${serverUrl}/player/${tag}`)
      .then((response) => setPlayer(response.data))
      .catch((error) => console.error(error));
  }, [tag]);

  if (!player) return <div>Loading...</div>;
  document.title = `${player.name} | ${player.clan ? player.clan.name : ''}`;

  return (
    <div className="p-5 bg-white shadow rounded">
      <h2 className="text-2xl font-bold">Player: {player.name}</h2>
      <p>Level: {player.expLevel}</p>
      <p>Trophies: {player.trophies}</p>
      <p>Clan: {player.clan ? player.clan.name : 'No Clan'}</p>
      <p>All details: <pre>{JSON.stringify(player, null, 2)}</pre></p>
    </div>
  );
};

export default PlayerStats;