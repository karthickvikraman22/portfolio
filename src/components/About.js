import AboutImg from '../assets/about.png'

export default function About(){
    return <>
      <section className='flex flex-col md:flex-row md:justify-center px-5 mt-10'>
        <img className="w-1/2 hidden md:block" src={AboutImg} alt="about"></img>
        <div className='w-full md:w-1/2 font-hero-font flex justify-start md:justify-center'>
           <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-2 border-white w-[160px] font-bold text-white bc'>About me</h1>
            <div className='text-white text-2xl pt-8'>
                <p>My name is Karthickvikraman.I am fresher and built a beautiful website with React.js and tailwind CSS.</p>
                <p className='pt-5'>I am proficient in Frontend Technologies such as CSS,JavaScript,React.js and Tailwind CSS.</p>
                <p className='pt-5'>In Backend, I know Express.js,Servlet,JDBC and MySQL.</p>
            </div>
           </div>
        </div>
      </section>
    </>
} 