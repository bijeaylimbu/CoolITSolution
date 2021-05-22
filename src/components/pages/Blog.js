import React from 'react';
import './Blog.css'
import Blog1 from '../Blog/Blog1'
import Blog2 from '../Blog/Blog2';
import Blog3 from '../Blog/Blog3';
import {Link} from 'react-router-dom';
export default function Blog(){
return (
 <>

 <div className="blog_main">
 <Link to='/blog1'>
<div className='first_blog'>
<h1>Why Website is Important For a Business</h1>
<br/>
<h2 className='blog_text'>
According to common opinion, the world is now in our hands, and knowledge is at our feet. That is without a doubt the case. The internet is a wonderful location. It is continuing to change how we interact with others, exchange knowledge, and live a fulfilling life.
Many people spend the majority of their time online..........
</h2>


</div>
</Link>

<Link to='/blog2'>
  <div className='first_blog'>

<h1>The importance of mobile apps for your business</h1>
<br/>
<h2 className='blog_text'>
Apps have changed the way users communicate with their phones and, as a result, how businesses conduct business.
Consumers now tend to address their issues on their smart phones, whether for networking, shopping, or transportation apps.....
</h2>

</div>
</Link>
<Link to='/blog3'>
<div className='first_blog'>
<h1>Why is artificial intelligence important?</h1>
<br/>
<h2 className='blog_text'>
Today, the measure of information that is produced, by the two people and machines, far dominates people's capacity to assimilate, decipher, and settle on complex choices dependent on that information. Computerized reasoning structures the reason for all PC learning and is ........
</h2>


</div>
</Link>

 </div>

 </>


);


}