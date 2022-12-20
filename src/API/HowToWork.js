import React,{useState} from 'react'
import workApi from './workApi'

const HowToWork = () => {
    const [workData,setWorkData] = useState(workApi);
  return (
    <>
    <section>
            <div className='conatiner work-container'>
                <h1 className='main-heading text-center'>How Does it work</h1>
                <div className='row'>
                    
                        {workData.map((curElm)=>{
                              const {id,title,logo,info} = curElm;
                            return(
                            <>
                                 <div className='col-12 col-lg-4 text-center work-container-firstChild' key={id}>
                                       <i className={`fontawesome-style ${logo}`}></i> 
                                       <h2 className="sub-heading">{title}</h2>
                                       <p className="main-hero-para">{info}</p>
                                    </div>
                            </>
                            )
                        })}
                   
                </div>
            </div>

    </section>
    </>
  )
}

export default HowToWork
