import { useEffect, useState } from 'react';
import HeroImg from '../assets/hero.png'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const [profession, setProfession] = useState("I'm a Software Engineer");
    useEffect(() => {
        const professions = ["React Developer", "MERN Developer", "MySQL Developer"];
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % professions.length;
            setProfession(professions[index]);
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    function handleSocial(socialLink) {
        window.location.href = socialLink;
    }

    return <>
        <section className='flex flex-col md:flex-row px-5 pt-20 justify-center'>
            <div className='md:w-1/2  flex flex-col'><h1 className=' text-white text-4xl font-hero-font'><span className='bc'>Hi</span>,<br />
                I'm Karthickvikraman<br /><p className='text-xl'>{profession}</p></h1>
                <div className='flex py-5 icon text-white'>
                    <button onClick={() => { handleSocial("https://www.linkedin.com/in/karthickvikraman-m/") }}><AiOutlineLinkedin size={30} /></button>
                    <button onClick={() => { handleSocial("https://github.com/karthickvikraman22") }} className='ml-4'><AiOutlineGithub size={30} /></button>
                </div>
            </div>
            <img className="hidden md:block md:w-1/3" src={HeroImg} alt="hero"></img>
        </section>
    </>
} 