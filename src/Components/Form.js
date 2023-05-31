import React from 'react'

function Form() {
    return (
        <div>
            <div id='mobilebiewonly'>
                <div className='formouter formcover'>
                    <div className="d-flex justify-content-start">
                        <img className='banner' src='/images/colgatebanner.png' />
                    </div>
                    <div className='justify-content-center  '>
                        <h1 className='enterDetails py-2 px-3'>Enter yours details</h1>
                    </div>
                    <form className=' py-2 px-4'>
                        <div className="form-group py-2">
                            <input type="text" className="form-control inputFormsBorderradius" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group py-2">
                            <input type="text" className="form-control inputFormsBorderradius " id="exampleInputPassword1" placeholder="Last Name" />
                        </div>
                        <div className="form-group py-2">
                            <input type="email" className="form-control inputFormsBorderradius" id="exampleInputPassword1" placeholder="Email" />
                        </div>
                        <div className="form-group py-2">
                            <input type="number" className="form-control inputFormsBorderradius" id="exampleInputPassword1" placeholder="Mobile" />
                        </div>
                        <div className="form-check py-2 px-5">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">By signing up, I agree to receive smile worthy email/ messages 
                            from Colgate-Palmolive (I) Limited and/or its authorized agencies. 
                            We'll handle your information in accordance with our
                             privacy policy. If you would like to, you can opt out at any time.</label>
                        </div>
                        <div className=' d-flex justify-content-center'>
                            <button type="submit" className="btn experienceTest">Submit</button>

                        </div>
                    </form>
                    {/* <div className='cont'>
                     <form className=' justify-content-center px-4'>
                     <div className="form-group py-1">
                            <input type="text" className="form-control inputFormsBorderradius " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group py-1">
                            <input type="text" className="form-control inputFormsBorderradius" id="exampleInputPassword1" placeholder="Last Name" />
                        </div>
                        <div className="form-group py-1">
                            <input type="email" className="form-control inputFormsBorderradius" id="exampleInputPassword1" placeholder="Email" />
                        </div>
                        <div className="form-group py-1">
                            <input type="number" className="form-control inputFormsBorderradius" id="exampleInputPassword1" placeholder="Mobile" />
                        </div>
                        <div className="form-check py-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">By signing up, I agree to receive smile worthy email/ messages 
                            from Colgate-Palmolive (I) Limited and/or its authorized agencies. 
                            We'll handle your information in accordance with our
                             privacy policy. If you would like to, you can opt out at any time.</label>
                        </div>
                        <div className=" d-flex justify-content-start px-5 ">
                            <button className='align-items-center experienceTest'>
                                Submit
                            </button>
                        </div>
                     </form>
                   </div> */}
                </div>
            </div>
            {/* <div id='mobilebiewonly'>
                <div className='formouter formcover'>
                    <div className="d-flex justify-content-start">
                        <img className='banner' src='/images/colgatebanner.png' />
                    </div>
                    <div className='justify-content-center px-3 py-5'>
                        <h1 className='enterDetails'>Enter yours details</h1>
                    </div>
                    <form className='px-4 py-5 inputForms'>
                        <div className="form-group py-3">
                            <input type="text" className="form-control inputFormsBorderradius" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control inputFormsBorderradius" id="exampleInputPassword1" placeholder="Last Name" />
                        </div>
                        <div className="form-group py-3">
                            <input type="email" className="form-control inputFormsBorderradius" id="exampleInputPassword1" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control inputFormsBorderradius" id="exampleInputPassword1" placeholder="Mobile" />
                        </div>
                        <div className="form-check py-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">By signing up, I agree to receive smile worthy email/ messages 
                            from Colgate-Palmolive (I) Limited and/or its authorized agencies. 
                            We'll handle your information in accordance with our
                             privacy policy. If you would like to, you can opt out at any time.</label>
                        </div>
                        <div className=" d-flex justify-content-start px-5 py-5">
                            <button className='align-items-center experienceTest'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    )
}

export default Form