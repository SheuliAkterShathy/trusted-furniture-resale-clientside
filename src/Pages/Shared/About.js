import React from 'react';
import { UilLinkedin,UilGithub,UilFacebook,UilTwitter } from '@iconscout/react-unicons'
const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
               About Us
              </h2>
              <p className="text-base md:text-lg">
               The resale product market where you can bye or sell your old furniture.Here is admin who have authority power on sellers and buyers.Admin can delete sellers and buyers.Buyers can buy products and can wish to bye. Sellers can add therir products and can advertise.This Website is developed by Sheuli Akter who is passionate for learning web development.
              </p>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/sheuliakter/"
                target="_blank"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mr-4"
              >
              <UilLinkedin/>
              
              
              </a>
              <a
                href="https://github.com/SheuliAkterShathy"
                aria-label=""
                target="_blank"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mr-4"
              >
              
              <UilGithub/>
              
              
               
              </a>
              <a
                href="https://www.facebook.com/sheuliakter.shathy/"
                target="_blank"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mr-4"
              >
              
              <UilFacebook/>
             
              </a>
              <a
                href="https://twitter.com/SheuliShathy"
                target="_blank"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
              
              <UilTwitter/>
              
              </a>
              
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://img.freepik.com/free-photo/table-chair-with-white-umbrella-outdoor-patio_74190-1917.jpg?w=1060&t=st=1675663024~exp=1675663624~hmac=632a379e8c84a7cf477b41df06ecca55f4304d83507768e49049a815816d296c"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://img.freepik.com/free-photo/interior-design-with-photoframes-comfortable-couch_23-2149385450.jpg?w=1060&t=st=1675662918~exp=1675663518~hmac=ccbfbbf74cea604c99aa2772cf5d87dc8e720d39a5140b03adc0d717aaf16398"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?size=626&ext=jpg&ga=GA1.2.258402809.1666072521&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  
    );
};

export default About;