import './App.css';
import React from 'react';
import Header from './components/header';
import Opening from './components/opening';
import Navbar from './components/navbar';
import Row from './components/Row';
import {Carousel} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({flag: false}), 5000);
  }
  render() {
    console.log(this.state.flag);
    return (
      <div className="App">
        <div>
          {this.state.flag ? (
            <Opening />
          ) : (
            <div>
              <Navbar />
              <Carousel controls={false}>
                <Carousel.Item>
                  <Header />
                </Carousel.Item>
                <Carousel.Item>
                  <Header />
                </Carousel.Item>
                <Carousel.Item>
                  <Header />
                </Carousel.Item>
                <Carousel.Item>
                  <Header />
                </Carousel.Item>
              </Carousel>

              <Row
                title="Netflix Originals"
                fetchUrl={process.env.REACT_APP_NETFLIX_ORIGINALS}
                isLargeRow={true}
              />
              <Row
                title="Trending"
                fetchUrl={process.env.REACT_APP_NETFLIX_TRENDING}
                isLargeRow={true}
              />
              <Row
                title="Top Rated"
                fetchUrl={process.env.REACT_APP_NETFLIX_TOP_RATED}
                isLargeRow={false}
              />
              <Row
                title="Action"
                fetchUrl={process.env.REACT_APP_NETFLIX_ACTION}
                isLargeRow={false}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
