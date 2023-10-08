import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
     <Link to="/" ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/75px-IMDB_Logo_2016.svg.png' alt='123' /></Link>
        <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span> </Link>
        <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
        <Link to="/movies/Recommanded" style={{textDecoration:"none"}}><span>Recommanded</span> </Link>
       
    </div>
  )
}

export default Header