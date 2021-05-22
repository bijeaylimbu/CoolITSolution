import React from 'react';
import Footer from '../Footer';
import "./Whatwedo.css";

export default function Whatwedo(){


    return(
     <>

     <div className="whatwedo">
       <h1> What We Do.........</h1>
     <div className="whatwedo_main">
     <img src="./image/webapplication.png" className="img_whatwedo"/>
     <h2>Website Development</h2>
     <br/>
     <ul className="whatwedo_ul">
       <li>Portfolio</li>
       <li>Protal Web App</li>
       <li>E-commerce Website</li>
       <li>Business Websites</li>
       <li>Magazine Websites</li>
       <li>Blogs</li>
       <li>News and Media Website</li>
     </ul>


     </div>

     <div className="whatwedo_main">
     <img src="./image/mobile.png" className="img_whatwedo"/>
     <h2>Mobile Application Development</h2>
     <ul className="whatwedo_ul">
       <li>Dating Application</li>
       <li>E-commerce Application</li>
       <li>Social Media Application</li>
       <li>Business Application</li>
       <li>News and Media Application</li>
     </ul>


     </div>

     <div className="whatwedo_main">
     <img src="./image/AI.jpg" className="img_whatwedo"/>
       <h2>Artificial Intelligence</h2>
       <ul className="whatwedo_ul">
         <li>Chatbot</li>
         <li>Recommendation System</li>
         <li>Image Recognition</li>
         <li>Sentimental Analysis</li>
         <li>Natural Language Processing</li>
         

       </ul>

      
     </div>
     

     <div className="whatwedo_text">
    <u> <h3>Just Believe on us</h3></u>
     </div>
     <div className="footer">

&copy; Copyright 2021 Cool IT Solution, All Rights Reserved.

</div>
</div>



      </>
    	);
}
