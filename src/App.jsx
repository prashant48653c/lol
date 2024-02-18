import { useEffect, useState } from 'react'
 
import './app.scss'
import Hero from './components/hero/Hero'
import Project from './components/project/Project'
import Work from './components/work/Work'
import Footer from './components/footer/Footer'
import AnimatedCursor from "react-animated-cursor"
function App() {

  

  return (
   <>
   {
    window.innerWidth >900
&&

<AnimatedCursor
className="custom-cursor"
   innerSize={10 }
   outerSize={28}
   color='238, 238, 238'
   outerAlpha={0.4}
   innerStyle={{opacity:.5}}
   innerScale={0.7}
   outerScale={2.5}
   clickables={[
     'a',
     'input[type="text"]',
     'input[type="email"]',
     'input[type="number"]',
     'input[type="submit"]',
     'input[type="image"]',
     'label[for]',
     'select',
     'textarea',
     'button',
     '.link'
   ]}
 />



}
  

 

  <main   className="container">
    <section className='section'>
      <Hero/>
    </section>

    <section className='section'>
      <Project/>
    </section>

    <section className='section'>
      <Work/>
    </section>

    <section className='section'>
      <Footer/>
    </section>
  </main>
  <p style={{textAlign:"center",color:"#D3D3D3 "}}>© 2023 Safal Poudel.</p>
   </>
  )
}

export default App
