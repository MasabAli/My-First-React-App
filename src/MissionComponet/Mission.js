import React,{  Component,Fragment } from "react";
import './Mission.css'
import image from "./phone.png";
class Mission extends Component{
    render(){
        return( 
            <Fragment>
               <section className="m">
            <div className="text"> <p> Our Mission  is to Connect<br />
                 the World.Startting  from Small Cities,<br />
                 
                 Connecting the Land Millimeter by Millimeters.
                  <br />
                 <p className="pp">
                     Building new ways to connect<br />
                   Bringing full transparency to the Land,<br />
                    Going Centralize to Decentralize!<br />
                   Utilizing new technologies where backing up is not the solution but synching is the way to the future<br />
                   Uploading to cloud is outdated, it is time to put your data files in the blocks with the advance blockchain technology.



                 </p>



                  </p></div>
                 
                 </section>
        
        
         <section className="sec">
             <h1> About Us</h1>
             <div className="khali"></div>
             <p>Incorporating the experience and expertise of kynoslogic working together with Japanese government for decades,
                 combining <br />their strength with the elite team of highly skilled professionals of W in Blockchain and AI.</p>
         </section>
         <section className="sec1">
             <div className="p1">
                 <h1>kynoslogic</h1>
                 <div className="khali1"></div>
                 <p>Starting in 1971 learning the importance of computer technology in<br />
                 changing world, joining hand together with Sharp Personal computing<br />
                 leading all the way to industries first Windows NT32bit Network type<br />
                 surveying CAD system in 1995. Kynos logic have exclusively developed<br />
                 several advanced land surveying and mapping software, working together <br />
                 with Japanese government for decades. Currently their advance <br /> 
                 measurement software is used nationwide with government of Japan.
                 </p>
             </div>
             <div className="p2">
                 <h1>W Group</h1>
                 <div className="khali2"></div>
                 <p>W is highly experienced in IT Sector since 1998 with offices worldwide.
                     <be /> Working in Blockchain since 2014 with the world highest level team 
                     <br />
                     developed several exchanges and blockchain based projects in USA,
                     <br /> Canada and UK. Our highly skilled team of engineers dedicated just for the
                     <br />Research on blockchain technology already delivered several mind blowing<br />
                      invention making our mark in the history by contributing in the future of WEB <br /> 3.O
                     </p>
             </div>
         </section>
         <section className="sec2">
             <h2>About Millimeter</h2>
             <div className="khali3"></div>
             <p>More than 70% of our world is not measured, Millimeter will measure, 
                 register and validate the world of tomorrow. Introducing the new <br />
             world where all land is digitized. Building a new future for you…
             
</p>
         </section>
         <section className="sec3">
         <div className="a1">
             <p>
             Unfortunately most of our land registry data is paper based. A few nations <br />
             are in stages of progressing to an online platform. We, Millimeter, are taking<br />
             a step further on digitizing the whole world on Blockchain. We have<br />
              simplified the most complex procedures of obtaining, verifying and<br />
              transferring legal proof of ownership with our private chain. The new digital <br />
              identity given to the land will make sure no earthquake, tsunami or natural<br />
               disaster can change the facts registered on our chain.
             </p>
         </div>
         <div className="a2">
         <img src={image} ></img>

         </div>
         </section>

         <section className="sec4">
             <h1>Technologies</h1>
             <div className="khali4"></div>
             <p>We are using a combination of RPA (Robotic Process Automation), AI (Artificial <br />
                Intelligence), IoT and Blockchain for mapping land and digitizing the data

</p>
<div className="t1">
<p className="b1"> <span style={{fontSize:"60px",color:"Yellow"}}>Blockchain</span><br />
     Connecting the state of the art <br /> instruments to Advance Blockchain System <br />
introducing our original and unbreakable BISMIL<br /> block, version 1.0</p>
</div>

<div className="t2">
<p className="b2">
<span style={{fontSize:"60px",color:"yellow"}}>RPA</span> <br />
Using RPA tools, we have configured a “robot,” <br />for 
capturing and interpreting the applications for<br />
 processing a file, manipulating data, generating
 responses and
 communicating with our Blockchain and other digital systems.
</p>
</div>
<div className="ai"> 
<p>
<span style={{fontSize:"60px",color:"yellow"}}>AI</span>
We are using Artificial Intelligence <br />
for automating the map readers<br />
 through deep learning techniques. <br />
 Our optical character recognition <br />
 (OCR) would allow the map readers to understand<br /> 
 variation between types of information. AI<br />
  implementation is also aimed at increasing the<br />
   point to point accuracy of land mapping.
</p>
</div>
<h6 style={{textAlign:"center",color:"white",fontSize:"25px"}}>Meet Our Brilliant Minds </h6>

         </section>
         

         
        
          </Fragment>
        )
    }
  }
  export default Mission;