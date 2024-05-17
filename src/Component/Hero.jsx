import React from 'react'
import img1 from '../Assets/image 6.png'
import img2 from '../Assets/image 2.png'
import img3 from '../Assets/image 5.png'
import img4 from '../Assets/Rectangle 33.png'
import img5 from '../Assets/Rectangle 34.png'
import img6 from '../Assets/Rectangle 35.png'
import img7 from '../Assets/Rectangle 36.png'
import img8 from '../Assets/Rectangle 38.png'
import img9 from '../Assets/Rectangle 39.png'
import img10 from '../Assets/Rectangle 40.png'
import img11 from '../Assets/Rectangle 41.png'

const Hero = () => {
  return (
    <div className="main">
    <div className='flex mt-10'>
      <div className="img mt-10">
        <img className='' src={img1} alt='' height={340} width={340}/>
      </div>
      <div className="min space-y-1 mb-20 ">
      <div className="h1 text-6xl text-[#1B3E80] -space-x-40 font-Poppins">
        BMW
      </div>
      <div className="h1 text-[#000000] text-6xl ml-20 pr-10 font-Poppins">
        DESIGN
      </div>
      </div>

    </div>
    
    <div className="h2 text-[#1B3E80] text-2xl flex justify-center mt-16 font-inter ">
    About Us
  </div>
  <div className="pa flex justify-center mt-5 p-8 font-Roboto">
  Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!
  </div>
  <div className="h2 text-[#1B3E80] text-2xl flex justify-center mt-16 font-inter">
    Our Videos
  </div>
  <div className="vid mt-5">
    <img src={img2} alt='' />
  </div>
  <div className="main flex mt-20">
  <div className="ourcar space-y-1 mt-10 ml-10">
<div className="our text-[#1B3E80] text-5xl font-Roboto">OUR</div>
<div className="our text-black text-5xl ml-10 mb-10 font-Roboto">CAR</div>
<div className="maingol flex ml-16 space-x-4">
    <div className="r1 text-white bg-[#1B3E80] rounded-full w-6 flex items-center justify-center" ><button>→</button> </div>
    <div className="r2 text-white bg-[#1B3E80] rounded-full w-6 flex items-center justify-center"> <button>→</button></div>
</div>


</div>
<div className="im mb-40 ml-28">
    <img src={img3} alt=''height={300} width={300} />
    </div>

  </div>

  <div className="mmw text-[#1B3E80] text-2xl flex justify-center mt-2 font-inter">Bmw Collections</div>
  <div className="main flex space-x-4 p-5">
    <div className="1st">
        <img  src={img4} alt="" />
    </div>
    <div className="1st">
        <img src={img5} alt="" />
    </div>
    <div className="1st">
        <img src={img6} alt="" />
    </div>
 
  </div>
  <div className="2main flex justify-between space-x-16 p-5">
    <div className="1st">
        <img className='size-48'  c src={img7} alt="" />
    </div>
    <div className="1st">
        <img className='size-48'  src={img8} alt="" />
    </div>
  </div>
  {/* 3rdlistofbmw */}

  <div className="main flex space-x-4 p-5">
    <div className="1st">
        <img  src={img9} alt="" />
    </div>
    <div className="1st">
        <img src={img10} alt="" />
    </div>
    <div className="1st">
        <img src={img11} alt="" />
    </div>
 
  </div>


  <div className="mmw text-[#1B3E80] text-2xl flex justify-center mt-2 font-inter">Bmw Forever</div>
  <div className="pa flex justify-center mt-5 p-8 font-Roboto">
  Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!
  </div>
<div className="foot  text-white bg-[#000000] p-4 flex justify-center items-center font-Poppins">
2023 Mike Delsing | All visuals belong to their respective owners
</div>
  </div>
  )
}

export default Hero
