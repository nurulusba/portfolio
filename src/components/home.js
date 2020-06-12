import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img1 from '../assets/main.png';

class Home extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={img1}
              alt="avatar"
              className="avatar-img"
              />

            <div className="division"> 
               <hr />
            </div>
            <div className="banner-text">
              <h1>Full Stack Web | Cloud Developer</h1>

            <hr/>

          <p>Java | Swift | JavaScript | PHP | Laravel | AWS | Azure | Hadoop</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Skype */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-skype" aria-hidden="true" />
          </a>

         

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;