import React from 'react'
import '../App.css'
function SmileMeter() {
    return (
        <div id='mobilebiewonly'>
            <div className='outerImage'>

                {/* width: 100vw
           height: 100vh
           background-image: url
           background-repeat: norepeat
           background-size: contain/cover
           background-position: center */}
                <div class="d-flex justify-content-start">
                    <img className='banner' src='/images/colgatebanner.png' />
                </div>
                {/* position absolute
        top 0px
        z-index: 2
        width: 100% */}
                <div className='justify-content-center '>
                    <img className='smiley' src='/images/smilelady.png' />
                </div>
                <div className=''>
                    <h3 className='ometer'>DISCOVER YOUR SMILE TYPE WITH OUR SMILE-O-METER</h3>
                </div>

                {/* carousel */}
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/images/instantdiscount.png" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/images/instantdiscount.png" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/images/instantdiscount.png" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


                <div class=" d-flex justify-content-start px-5 py-5">
                    <button className='align-items-center experienceTest'>
                        Start test
                    </button>
                </div>
                {/* position absolute
        bottom 5px
        z-index: 2
        width: 75% 80% */}

            </div>
        </div>
    )
}

export default SmileMeter