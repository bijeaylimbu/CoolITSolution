import React from 'react';
import './Video.css';
import "../App.css";
import {Button} from "./Button";
import {Link} from 'react-router-dom';
function Video(){
return (
    <div className="video-container" >

        <video src="./video/video2.mp4"   autoPlay loop muted/>
       <h1>Increase your business with us</h1>
       <p>What are you waiting for?</p>
       <p>Your Business needs our IT Support</p>
       <div className="video-btn" >

           <Button className="btn">
           <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }} > Reach Us</Link>


           </Button>

           
       </div>



        
    </div>

);
}

export default Video;