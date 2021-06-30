import { Link } from 'react-router-dom';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <Link to="/LeagueList">Список Лиг</Link>
      <Link to="/CommandList">Список команд</Link>
      <Link to="/LeagueCalendar">Календарь Лиги</Link>
      <Link to="/TeamCalendar">Календарь одной команды</Link>
    </div>
  );
}
