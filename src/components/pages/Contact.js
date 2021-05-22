import React, { Component } from 'react';
import Footer from '../Footer';
import {useHistory} from 'react-router-dom';
import { useState,useEffect } from 'react'


import "./Contact.css";



export default function Contact(){
  const history = useHistory();
  const [touch_fullname, setFullName] = useState('')
  const [touch_email, setTouchEmail] = useState('')
  const [touch_message, SetTouchMessage] = useState('')


  const [idea_fullname, setIdeaName] = useState('')
  const [idea_email, setIdeaEmail] = useState('')
  
  const [idea_phone, setIdeaPhone] = useState('')
  // const [idea_file, setIdeaFile] = useState('')
  const [idea_message, setIdeaMessage] = useState('')




  const insertAddTouch = () => {
    
    const uploadData = new FormData();
    uploadData.append('full_name', touch_fullname);
    uploadData.append('email', touch_email);
    uploadData.append('message', touch_message);
    

 
    fetch('http://127.0.0.1:8000/touch/', {
      method: 'POST',
      body: uploadData,
      
    })
  //  alert('thank you for your time ')
    // history.push('./contact')
    // window.location.reload();

    
}

const insertAddIdea = () => {
    
  const uploadData = new FormData();
  uploadData.append('full_name', idea_fullname);
  uploadData.append('email', idea_email);
  uploadData.append('idea', idea_message);
  uploadData.append('phone', idea_phone);
  // uploadData.append('select_file', idea_file);
  


  fetch('http://127.0.0.1:8000/idea/', {
    method: 'POST',
    body: uploadData,
    
  }).catch(error => {









  })
  // history.push('./contact');
  // alert('thank you for your time ')
  // window.location.reload();
  
  
}

    return (

        <>
        <div className="contact_main">

        <div className="part1">
            <h1>Lets, get in touch</h1>
            <br/>
           

            <div className="container">
 
    <div className="row">
      <div className="col-25">
        <label for="fname">Full Name</label>
      </div>
      <div className="col-75">
        <input type="text"  placeholder="Your name.."  id='touch_fullname'  value = {touch_fullname} onChange={(evt) => setFullName(evt.target.value)} />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Email</label>
      </div>
      <div className="col-75">
        <input type="email"  placeholder="Email" required id='touch_email'  value = {touch_email} onChange={(evt) => setTouchEmail(evt.target.value)}/>
      </div>
    </div>
    
    <div className="row">
      <div className="col-25">
        <label for="subject">Message</label>
      </div>
      <div className="col-75">
      <textarea type="text"    placeholder="Your message here...."  className="input_message" required id='touch_message'  value = {touch_message} onChange={(evt) => SetTouchMessage(evt.target.value)}/>
      </div>
    </div>
    <div className="row_button">
    <button className="submit_button" onClick={() => insertAddTouch()}>Submit</button>
    </div>

</div>



        </div>
        <div className="part2">
    <h1 className="part2_text"> If you have an idea, lets work together on it.</h1>

<br/>


<div className="container">
 
    <div className="row">
      <div className="col-25">
        <label for="fname">Full Name</label>
      </div>
      <div className="col-75">
        <input type="text"  placeholder="Your name.." required id='idea_fullname'  value = {idea_fullname} onChange={(evt) => setIdeaName(evt.target.value)}/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Email</label>
      </div>
      <div className="col-75">
        <input type="email"   placeholder="Email" required required id='idea_email'  value = {idea_email} onChange={(evt) => setIdeaEmail(evt.target.value)}/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Phone</label>
      </div>
      <div className="col-75">
        <input for="phone"    placeholder="Phone Number"  id='idea_phone'  value = {idea_phone} onChange={(evt) => setIdeaPhone(evt.target.value)}/>
      </div>
    </div>

    {/* <div className="row">
      <div className="col-25">
      <label for="myfile">Select files:</label>
  <input type="file" id="myfile"  multiple required id='idea_file'  value = {idea_file} onChange={(evt) => setIdeaFile(evt.target.value)}/><br/>
      </div>
    </div>
     */}
    <div className="row">
      <div className="col-25">
        <label for="subject">Idea</label>
      </div>
      <div className="col-75">
      <textarea type="text"    placeholder="Please, submit your idea here and we will contact you in short time"  className="input_idea" required required id='idea_message'  value = {idea_message} onChange={(evt) => setIdeaMessage(evt.target.value)}/>
      </div>
    </div>
    <div className="row_button">
    <button className="submit_button" onClick={() => insertAddIdea()} >Submit</button>
    </div>

</div>
        </div>
        <div className="div_footer">
      

     <center>  &copy; Copyright 2021 Cool IT Solution, All Rights Reserved.</center>

        </div>
      
        </div>
        
        </>
    );
}


