import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container-fluid footer-container'>
                <div className='row'>
                    <div className='col-12 col-lg-10 mx-auto'>
                        <div className='row'>
                            <div className='col-6 col-lg-3'>
                                <h2>About</h2>
                                <ul>
                                    <li><a href='#'>More Info</a></li>
                                    <li><a href='#'>Profile</a></li>
                                </ul>
                            </div>
                            <div className='col-6 col-lg-3'>
                                <h2>Company</h2>
                                <ul>
                                    <li><a href='#'>Customers</a></li>
                                    <li><a href='#'>Our-Team</a></li>
                                </ul>
                            </div>
                            <div className='col-6 col-lg-3'>
                                <h2>Services</h2>
                                <ul>
                                    <li><a href='#'>More Info</a></li>
                                    <li><a href='#'>Profile</a></li>
                                </ul>
                            </div>
                            <div className='col-6 col-lg-3'>
                                <h2>Follow Us</h2>
                               <div className='row'>
                                <div className='col-3 mx-auto'>
                                    <a href='#'><i className="fa-brands fa-facebook fontawesome-style"></i></a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href='#'><i className="fa-brands fa-instagram fontawesome-style"></i></a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href='#'><i className="fa-brands fa-twitter fontawesome-style"></i></a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href='#'><i className="fa-brands fa-linkedin fontawesome-style"></i></a>
                                </div>
                               </div>
                            </div>
                        </div>
                        <hr/>
                        <div className='mt-3'>
                            <p className='text-center'>Copyright @ 2022 Amiax.All rights are reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
