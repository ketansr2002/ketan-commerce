import React  from 'react'
import HeroSection from './components/HeroSection'
import {useProductContext} from "./context/productContext"

const About = () => {
  const myName=useProductContext();

    const data={
        name:"Ketan Store",
    }
  return (

    <>
    {myName.name}
    <HeroSection myData={data} />
    </>
  )
}

export default About