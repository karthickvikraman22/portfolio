import ResumeImg from '../assets/resume.jpg'

export default function Resume(){
    return <>
      <section className="mt-20 flex flex-col md:flex-row md:justify-center px-5" id='res'>
        <img className="hidden md:block w-[350px] h-[450px]" src={ResumeImg} alt="about"></img>
        <div className='w-full md:w-1/2 font-hero-font flex justify-start md:justify-center md:ml-20'>
           <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-2 border-white w-[130px] font-bold bc'>Resume</h1>
            <div className='text-white text-2xl pt-8'>
                <p>Web developer skilled in React,Express,Tailwind CSS and MySQL. Experienced in building efficient,responsive applications with a focus on user experience. Developed an Online Code Efficiency Analyzer and driven to create optimized, impactful solutions.</p>
                <p className='pt-5'>You can view my resume <button className='text-sm border text-black download'>Download</button></p>
            </div>
           </div>
        </div>
      </section>
    </>
} 