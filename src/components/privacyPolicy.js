import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import img1 from '../assets/policy.png';

class PrivacyPolicy extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Privacy Policy</h2>
            <img
              src={img1}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </Cell>
         
        </Grid>
      </div>
    )
  }
}

export default PrivacyPolicy;