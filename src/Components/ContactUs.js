import React,{useState} from 'react'

const ContactUs = () => {
    const [userData,setData] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        Address:"",
        Message:"",
    });

    let name,value;
    const postUserData = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setData({...userData,[name]:value})
    };

    // firebase database

    const submitData = async(e)=>{
        e.preventDefault();
        const{ firstName,lastName,phoneNumber,email,Address,Message} = userData;
       const res = await fetch("https://amiax-1e92a-default-rtdb.firebaseio.com/userData.json",
       {
        method:"POST",
        headers:{
            "Content-Type":"application/json"

        },
        body:JSON.stringify({
            firstName,lastName,phoneNumber,email,Address,Message,
        })
       })
       if(res){
        setData({
            firstName:"",
            lastName:"",
            phoneNumber:"",
            email:"",
            Address:"",
            Message:"",
        })
        alert("Enquiry has been sent")
       }
       else{
        alert("Please try again")
       }
    }
  return (
    <>
     <section className='contact-form'>
        <div className='conatiner form-container'>
            {/* <h1 className='text-center mb-2'>Contact Us</h1> */}
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto '>
                    <div className='row'>
                        <div className='col-12 col-lg-4 contact-left-side order-sm-1'>
                        <h2 className='mb-2 fw-bold'>How to reach Us</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, repellendus.</p>
                        <img src='./images/jake.jpg' className='ing-fluid'></img>
                        </div>
                  <div className='col-12 col-lg-7 right-side-form order-sm-2'>
                    <form method='POST'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 contact-form-input mb-5'>
                                <input type='text' id='' placeholder='First Name' 
                                className='form-control'
                                name='firstName'
                                value={userData.firstName}
                                onChange={postUserData}
                                ></input>
                            </div>
                            <div className='col-12 col-lg-6 contact-form-input mb-5'>
                                <input type='text' id='' placeholder='Last Name'
                                className='form-control'
                                name='lastName'
                                value={userData.lastName}
                                onChange={postUserData}
                                ></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-lg-6 contact-form-input mb-5'>
                                <input type='text' id='' placeholder='Phone-Number' 
                                className='form-control'
                                name='phoneNumber'
                                value={userData.phoneNumber}
                                onChange={postUserData}
                                ></input>
                            </div>
                            <div className='col-12 col-lg-6 contact-form-input mb-5'>
                                <input type='text' id='' placeholder='Email'
                                className='form-control'
                                name='email'
                                value={userData.email}
                                onChange={postUserData}
                                ></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-lg-12 contact-form-input mb-5'>
                                <input type='text' id="" placeholder='Address'
                                className='form-control'
                                name='Address'
                                value={userData.Address}
                                onChange={postUserData}
                                ></input>
                            </div>
                            <div className='col-12 col-lg-12 contact-form-input mb-5'>
                                <input type='text' id="" placeholder='Message'
                                className='form-control'
                                name='Message'
                                value={userData.Message}
                                onChange={postUserData}
                                ></input>
                            </div>
                            <div className="mb-3 form-check contact-form-input">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label checkbox-label contact-form-input" for="exampleCheck1">I agree that Amiax can contact me via email or phone</label>
                            </div>
                            <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>
                        </div>
                    </form>
                    </div>
                  </div>
                </div>
            </div>
        </div>
     </section>

    </>
  )
}

export default ContactUs
