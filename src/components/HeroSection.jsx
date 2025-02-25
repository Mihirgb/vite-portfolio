import React,{useEffect} from 'react'
import { BackgroundLines } from "@/components/ui/background-lines";
import axios from 'axios';

const HeroSection = () => {
  useEffect(() => {
    axios.get('https://render-deployment-cmrp.onrender.com/') // Change port if needed
        .then(response => console.log(response.data)) // Log response
        .catch(error => console.error('Error:', error));
}, []);

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col p-12">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Hi guys, <br /> I'm Mihir Gajbhiye.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        I like building user interfaces that look good because beauty is everything. This component has a background lines effect which looks like a birthday party but has nothing to do with my personality. Btw my birthday is on 13th April every year👍.
      </p>
    </BackgroundLines>
     
  )
}

export default HeroSection