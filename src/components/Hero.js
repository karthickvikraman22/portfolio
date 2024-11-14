import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin} from "react-icons/ai";
export default function Hero(){
    return <>
    <section className='flex flex-col md:flex-row px-5 pt-20 sec justify-center'>
        <div className='md:w-1/2  flex flex-col'><h1 className=' text-white text-4xl font-hero-font'><span className='text-black'>Hi</span>,<br/>
        I'm Karthickvikraman<br/><p className='text-2xl'>I'm a software engineer</p></h1>
        <div className='flex py-5 icon'>
            <a href='index.html'><AiOutlineTwitter size={30}/></a>
            <a href='index.html'><AiOutlineFacebook size={30}/></a>
            <a href='index.html'><AiOutlineLinkedin size={30}/></a>
        </div>
        </div>
        <img className ="hidden md:block md:w-1/3" src={HeroImg} alt="hero"></img>
    </section>
    </>
} 