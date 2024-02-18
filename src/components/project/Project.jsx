import React, { useState } from 'react'
import './project.scss'
const Project = () => {
const [show, setShow] = useState(false)

const projectDetail = [
{
name: "Building Agroculturex: Part 1",
desc: "An exploratory UX design project where I attempted to enhance product discoverability and streamline the checkout process.",
img: '/ed.png',
date: 2020,
link: "https://safalpoudel.notion.site/Simplifying-the-Cinema-Ticket-Booking-Process-An-Explorative-App-UX-Case-Study-503b1d5a5d994ed99a9df72d6a242cf2",
isComplete: false
},

{
name: "Simplifying the Cinema Ticket",
desc: " This is a documentation my first product design case study In this case study, I'll walk you through how I spotted a problem and used a dynamic approach to solve it. So, hold on tight, and let's dive into this journey together",
img: '/cinema.png',
date: 2020,
isLast: true,
link: "https://safalpoudel.notion.site/Simplifying-the-Cinema-Ticket-Booking-Process-An-Explorative-App-UX-Case-Study-503b1d5a5d994ed99a9df72d6a242cf2",
isComplete: true
},

]
return (
<>

<p className='para-head'  >Projects</p>

{
projectDetail.map((project, i) => {
return (
<div key={i} className={project?.isLast ? `section ` : `section mb5`}>


<div className="flex-container">
<p className='paras'>2020</p>

<div className="project-box">
<h5>
{(project.name).length > 29 ? (project.name).slice(0, 50) + "..." : project.name}
</h5>
<p className="para">

{(project.desc).length > 170 ? (project.desc).slice(0, 170) + "..." : project.desc}
</p>
<div className="placeholder">
<img src={project.img} alt="" />

</div>
<div className="live">
<div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="para flex">
<a target='_blank' style={{ textDecoration: "none" }} href={project.link}>
{project.isComplete ? "View Full Case Study" : "Full Case Study (Coming Soon)"}
</a>

{
show ?
<img src='arrow.svg' alt="Icon for link" />
:

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M14 13.5C14 13.6326 13.9473 13.7598 13.8536 13.8536C13.7598 13.9473 13.6326 14 13.5 14H2.5C2.36739 14 2.24021 13.9473 2.14645 13.8536C2.05268 13.7598 2 13.6326 2 13.5C2 13.3674 2.05268 13.2402 2.14645 13.1464C2.24021 13.0527 2.36739 13 2.5 13H13.5C13.6326 13 13.7598 13.0527 13.8536 13.1464C13.9473 13.2402 14 13.3674 14 13.5ZM5 11C5.06568 11.0001 5.13073 10.9872 5.19142 10.9621C5.25212 10.937 5.30728 10.9002 5.35375 10.8538L11.5 4.70687V9.5C11.5 9.63261 11.5527 9.75979 11.6464 9.85355C11.7402 9.94732 11.8674 10 12 10C12.1326 10 12.2598 9.94732 12.3536 9.85355C12.4473 9.75979 12.5 9.63261 12.5 9.5V3.5C12.5 3.36739 12.4473 3.24021 12.3536 3.14645C12.2598 3.05268 12.1326 3 12 3H6C5.86739 3 5.74021 3.05268 5.64645 3.14645C5.55268 3.24021 5.5 3.36739 5.5 3.5C5.5 3.63261 5.55268 3.75979 5.64645 3.85355C5.74021 3.94732 5.86739 4 6 4H10.7931L4.64625 10.1462C4.57624 10.2162 4.52856 10.3053 4.50924 10.4023C4.48991 10.4994 4.49981 10.6 4.53769 10.6914C4.57556 10.7828 4.63971 10.8609 4.72201 10.9159C4.80431 10.9708 4.90105 11.0001 5 11Z" opacity={0.7} fill="#D3D3D3" />
</svg>
}






</div>

</div>
</div>
</div>
</div>
)
})
}





</>


)
}

export default Project