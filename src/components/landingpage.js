import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
render () {
    return (
    <div style ={{width:'100%', margin:'auto'}}>
    <Grid className='landing-grid'>
        <Cell col={12}>
          <div>  
              <img 
                src="https://www.pharmaid.be/assets/Uploads/AvatarAM.png"
                alt="avatar"
                className="avatar-img"
                />
                </div>
            <div className="banner-text">
                <h1>Senior Software Developer </h1>
                <hr/> 

                <p>HTML |CSS | IOS | Android | React | Bootstrap | React Native | NodeJS </p>
                {/* {Linkedin} */}

                <div className="social-links">
                <a href="https://www.linkedin.com/in/ayman-berjaoui/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="false" />
                </a>
                
                {/* {Facebook} */}
                <a href="https://www.facebook.com/KinderTwixBueno" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                   {/* {Github} */}
                <a href="https://www.facebook.com/KinderTwixBueno" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                       {/* {youtube} */}
                       <a href="https://www.facebook.com/KinderTwixBueno" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
            </div>
            </div>
        </Cell>
    </Grid>
</div>

            )
           }
        }

export default Landing;
