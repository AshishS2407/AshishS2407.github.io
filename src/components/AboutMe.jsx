import React from 'react'
import snap1 from '../assets/Images/mypic.jpg'

const AboutMe = () => {
  return (
<>
<section className="text-center p-72 bg-blue-400 ">
        <h3 className="font-extrabold text-4xl text-white"> About Me </h3>
        <img src={snap1} className=" inline-block ml-10 mt-10 rounded-xl shadow-xl shadow-grey-100 size-8/12"/>
        <p className="mt-10 ml-10 ont-semibold text-white text-xl">            I am Ashish.S, A B.Tech graduate in the field of Civil Engineering who is now doing Post Graduation in Blockchain at the Kerala Blockchain Academy, Digital University Kerala to pursue a career in the field of IT. My family comprises of four peoples which includes My father, mother and a brother. The name of my home town is Vallikunnam which is situated on the border of two dirsticts in Kerala, Alappuzha & Kerala. Watching films, reviewing films, listening to music are my favourite hobbies. I have got a huge friend circle which i believe as one of huge achievement as a person.
        </p> 

       </section>
</>
)
}

export default AboutMe