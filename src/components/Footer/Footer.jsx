import React from 'react';
import { 
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaLocationArrow,
    FaMobileAlt
 } from 'react-icons/fa';

 import footerLogo from "../../assets/website/logo.png";

 const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-950'>
        <div className="container">
            <div className='grid md:grid-cols-3 py-5'>
                {/*company detals*/}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justifymb-3'>RetroReads Haven</h1>
                    <p>Step into the literary charm of RetroReads Haven, where nostalgia meets the joy of discovery.
                        Immerse yourself in classic tales and modern gems in a uniquely welcoming bookish retreat.
                    </p>
                    <br />
                    {/*social links*/}
                    <div className='flex items-center'>
                        <FaLocationArrow />
                        <p>Seattle,Washington State</p>
                    </div>
                    <div className='flex items-center'>
                        <FaMobileAlt/>
                        <p>+12066749325</p>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="https://www.linkedin.com/in/danilaalbutov/">
                        <FaLinkedin className = "text-3xl"/>
                        </a>
                        <a href="https://github.com/dankramer2222">
                        <FaGithub className = "text-3xl"/>
                        </a>
                    </div>
                </div>
                {/*links section*/}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>
                                Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((data)=>(
                                        <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1
                                         text-gray-500">
                                            <span>&#11162;</span>
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>
                                Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((data)=>(
                                        <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1
                                         text-gray-500">
                                            <span>&#11162;</span>
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>
                                Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((data)=>(
                                        <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1
                                         text-gray-500">
                                            <span>&#11162;</span>
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer