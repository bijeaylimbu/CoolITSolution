import React, { cloneElement } from 'react';
import "./Team.css";

 function Team(){


    return(
        <>
        <div className="team_main"> 

        <div className="team1">
            <div className="item1">

        <img src="./image/bijay.jpg" className="team1_img"/>
     <h2 className='team1_text'> Founder</h2>

        
            
            </div>
            <div className="item2">
            <h2>Hi,</h2>
            <h4>I am so graceful you visited our website.  CoolITSolution solution is an IT
            company which aim to make Nepal Digitalized in short time so that,
             internet will be properly utilized and people would know the importance of internet.</h4>
             <br/>
             <h2>We</h2> <h4> can develop a strategy that allows you to grow your
 business without budget stress. Lets start from the small and
  later on we can stepped into the bigger one.</h4>
  <br/>
  <h2>In</h2> <h4>the world of technology, we the CoolITSolution here to make impact on technology.
Our mission is to provide the best IT solution for their needs.
 We maintain professional relationships with the client so that we make sure they are satisfy. </h4>
             

            
            </div>
           
          
        </div>

        {/* <div className="team2">
        <div className="item1_team2">
<ol className="ol_team2">
<li><img src="./image/ramita.jpg" className="team2_img"/></li>

<li className="li_item2"><h2>Backend</h2></li>
</ol>
</div>
<div className="team2_item2">
<h2>We</h2> <h4> can develop a strategy that allows you to grow your
 business without budget stress. Lets start from the small and
  later on we can stepped into the bigger one.</h4>
</div>
</div> */}

{/* <div className="team3">
<div className="team3_item1">
    <ol>
<li><img src="./image/sunanda.jpg" className="team3_img"/></li>
<li><h2 className="item3_title">Frontend</h2></li>
</ol>
</div>
<div className="team3_item2">
<h2>In</h2> <h4>the world of technology, we the CoolITSolution here to make impact on technology.
Our mission is to provide the best IT solution for their needs.
 We maintain professional relationships with the client so that we make sure they are satisfy. </h4>

</div>
</div> */}

<div className='other_team'>
{/* <center><h1>Our Team</h1></center>
<br/> */}
{/* <div className='first'>

    <img src='../image/ramita.jpg' className='first_image'>

    </img>
    <br/>
   <h3>Ramita shrestha</h3>
    <h3>Backend Developer</h3>
</div> */}
{/* <div className='first'>

    <img src='../image/sunanda.jpg' className='first_image'>

    </img>
    <br/>
    <h3>Sunanda Panta</h3>
    <h3>Frontend Developer</h3>
</div> */}
{/* <div className='first'>

    <img src='../image/krishna.jpg' className='first_image'>

    </img>
    <br/>
    <h3>Krishna Mehta</h3>
    <h3>SEO</h3>
</div> */}
{/* <div className='first'>

    <img src='../image/ajay.jpg' className='first_image'>

    </img>
    <br/>
    <h3>Ajay Limbu</h3>
    <h3>Graphic Designer</h3>
</div> */}
</div>
<div className="footer">

&copy; Copyright 2021 Cool IT Solution, All Rights Reserved.

</div>




        </div>

        

        </>



    );
    
 }

 export default Team;