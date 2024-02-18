import React from 'react'
 import './work.scss'
const Work = () => {

    const workData=[
        {
            role:"Product Designer",
            company:"Vistaar Trade",
            time:"Oct 2023 - Present",
            img:"/vistaar.png",
            isLast:false
        },
        {
            role:"UX Designer",
            company:"Kalo Kalam",
            time:"May 2023 - Oct 2023",
            img:"/kk.png",
            isLast:false
        },
        {
            role:"UX Design Intern",
            company:"Edxplor",
            time:"Mar 2023 - May 2023",
            img:"/edx.png",
            isLast:true
        },
    ]
    
 
  return (
    <div className='work-flex'>
         <p className='para-head' style={{fontSize:"1rem"}}>Work</p>


{
    workData.map((elem,i)=>{
        return(
<div   className={elem.isLast ? "work no-border": "work" }>
    <div className='work-company'>
   <img className='company-icon' src={elem.img} alt="" />
   <div className='work-name'>
   <h6 className='highlight'>{elem.role}</h6>
    <p className='highlight'>{elem.company}</p>
   </div>

    </div>

    <div className="date highlight">
        <p>{elem.time}</p>
    </div>
</div>
        )
    })
}


 

{/* <div className="work no-border">
    <div className='work-company'>
   <img className='company-icon' src="/edx.png" alt="" />
   <div>
    <h6 className='highlight'>Product Designer</h6>
    <p className='highlight'>Vistaar Trade</p>
   </div>

    </div>

    <div className="date highlight">
        <p>Oct 2023 - Present</p>
    </div>
</div> */}

    </div>
  )
}

export default Work