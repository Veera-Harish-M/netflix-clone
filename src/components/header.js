import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './header.css';
import {Button} from 'react-bootstrap';
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(process.env.REACT_APP_NETFLIX_ORIGINALS);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      if (movie === undefined) {
        setMovie(request.data.results[request.data.results.length - 1]);
      }
      return request;
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  function truncate(str, n) {
    return str?.length.n ? str.substr(0, n - 1) + '...' : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {' '}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div style={{marginTop: '18px', marginBottom: '7px'}}>
          <Button style={{width: '100px'}} variant="secondary">
            Play
          </Button>
          <Button
            style={{width: '100px', marginLeft: '20px'}}
            variant="secondary"
          >
            MyList
          </Button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 60)}</h1>
      </div>
      <div style={{marginTop: '140px'}} className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
