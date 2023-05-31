import React from 'react'
import '../App.css'
function LandingPage() {
  return (
    <div id='mobilebiewonly'>
      <div className='colgate'>
        <div class="d-flex justify-content-start">
          <img className='banner' src='/images/colgatebanner.png' />
        </div>
        <div className='colgates'>
          <img className='colbanner' src="/images/BGimage.png" />
        </div>
        <div class=" d-flex justify-content-start px-5 py-5">
          <button className='align-items-center experienceTested' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Start the Experience
          </button>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content backgroundpopup ">
            <div className="modal">
              <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
              <button type="button" className="btn btnclose" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='d-flex justify-content-end'>
              <button type="button" className="btn-close text-white btnclose px-4 py-4" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div className="modal-body justify-content-center">
              <img className='popupcamera' src='/images/colgatepopup.png' />
              <div>
                <h3 className='text-white pack'>POINT YOUR CAMERA TOWARDS THE PACK!</h3>
              </div>
              <div className=" justify-content-center">
                <button type="button" className="btn next" data-bs-dismiss="modal">Next</button>

              </div>
            </div>

            {/* <div className="modal-footer justify-content-center">
              <button type="button" className="btn next" data-bs-dismiss="modal">Next</button>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage