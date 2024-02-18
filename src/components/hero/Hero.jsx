import React from 'react'
import './hero.scss'
 
 
const Hero = () => {
  return (
    <div className='section-hero'>
      <img src="/safal.png" className='img-icon' alt="Image of the owner" />
      <div className='write-text'>

 

        <h1 className="heading-text"><span className='heading-text-white'>Safal Poudel</span>. Product Designer at <span className='heading-text-white' >Vistaar Trade,</span><br />
        enhancing brand, product & process.
        </h1>

        <p className='para' style={{ margin: "  1.5rem 0.1rem " }}>

          Crafting product experience at <a href='https://vistaartrade.com/' className='glow' style={{ color: "white" }}><span  style={{ color: "white",cursor:"pointer" }}>Vistaar Trade</span></a>, establishing <span style={{ color: "white" }}> design system </span>to scale design and improve development processes. Diving into the  <span style={{ color: "white" }} >user data and metrics</span>, to analyse and enhance the overall user experience.</p>


        <p className='para' style={{ margin: "1.5rem 0" }}>I'm also engaged in a few exciting  <span style={{ color: "white" }} >side project</span>—can't spill the details just yet, but here's a glimpse with <span style={{ color: "white" }} >few visuals</span>. Stay tuned for more!</p>
      </div>

      <div className="img-container">
        <div className="placeholder">
          <img src="/purplebanner.png" alt="Purple color placeholder image" />
        </div>
        <div className="placeholder">
          <img src="/redbanner.png" alt="Red color placeholder image" />

        </div>
      </div>
    </div>
  )
}

export default Hero