import AboutImg from '../assets/about.png'

function About() {

  function handleResume() {
    window.location.href = "https://drive.google.com/file/d/1STzW2U-TvGe2P90JgO7Xe4a78KaHnfTI/view?usp=sharing";
  }

  return <>
    <section className='flex flex-col md:flex-row md:justify-center px-5 mt-10 md:px-20'>
      <img className="w-1/2 hidden md:block" src={AboutImg} alt="about"></img>
      <div className='w-full md:w-1/2 font-hero-font flex justify-start md:justify-center'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl border-b-2 border-white w-[160px] font-bold text-white bc'>About me</h1>
          <div className='text-left text-white text-2xl pt-8'>
            <p>I am Karthickvikraman. I have graduated in BE Computer Science and Engineering from Government College of Engineering Tirunelveli.</p>
            <p className='pt-5'>I am proficient in Frontend Technologies such as React.js and Tailwind CSS.</p>
            <p className='pt-5'>In Backend, I know Express.js, MySQL and Mongo Db.</p>
            <p className='pt-5'>View my resume<button onClick={handleResume} className='ml-2 text-sm download'>Download</button></p>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default About;