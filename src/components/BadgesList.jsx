import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');

  const [filteredBadges, setfilteredBadges] = React.useState(badges)
  
  React.useMemo(() => {
    const result = badges.filter( badge => {
    return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    });
  
    setfilteredBadges(result)
  }, [ badges, query ]);
  
  return { query, setQuery, filteredBadges }
}

function BadgesList (props) {
const badges = props.badges;

const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <div>
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input  
          type="text" 
          className="form-control" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
        <h3>No encontramos ningun Badge</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </div>
    )
  }

  return (
    <ul className="list-unstailed">
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input  
          type="text" 
          className="form-control" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      {filteredBadges.map((badge) => {
        return (
          <li key={badge.id} className="BadgesList">
            <Link to={`/badges/${badge.id}`}>
            <Gravatar
              className="Badge-Avatar"
              email={badge.email}
              alt={`Avatar`}
            />
            </Link>
            <div>
              <p>Nombre: {badge.firstName} {badge.lastName}</p>
              <p>Profesión: {badge.jobTitle}</p>
              <p className="Tw"> <img className="LogoT" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/738px-Twitter_bird_logo_2012.svg.png" alt="Twiter"/> @{badge.twitter}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default BadgesList;
