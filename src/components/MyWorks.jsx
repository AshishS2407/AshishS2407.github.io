import React from 'react'
import pic2 from '../assets/Images/2.png'
import pic3 from '../assets/Images/5.png'
import pic4 from '../assets/Images/6.png'
import pic5 from '../assets/Images/7.png'
import pic6 from '../assets/Images/8.png'
import pic7 from '../assets/Images/9.png'

const MyWorks = () => {
  return (
    <>
    
    <h3 className="bg-blue-400 font-extrabold text-4xl text-white text-center"> My Works</h3>

       <section className="flex justify-center gap-20 bg-blue-400">
        <img src={pic5} className="h-72 w-96 rounded-xl mt-32" alt=""/>
        <img src={pic3} className="h-72 w-96 rounded-xl mt-32" alt=""/>
        <img src={pic4} className="h-72 w-96 rounded-xl mt-32" alt=""/>
       </section>

       <section className="flex justify-center gap-20 bg-blue-400">
        <img src={pic6} className="h-72 w-96 rounded-xl mt-32" alt=""/>
        <img src={pic7} className="h-72 w-96 rounded-xl mt-32" alt=""/>
        <img src= {pic2} className="h-72 w-96 rounded-xl mt-32" alt=""/>
       </section>
     </>
  )
}



export default MyWorks