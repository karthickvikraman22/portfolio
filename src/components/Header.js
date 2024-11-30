
export default function Header(){
    return <>
    <header className="flex w-full p-2 fixed bg z-50">
        <h1 className="font-bold pl-5 pr-10 text-black">Karthickvikraman</h1>
         <nav className="hidden md:block">
            <ul className="flex">
                <li><a href="/" className="co">Home</a></li>
                <li><a href="#edu" className='co'>Eduation</a></li>
                <li><a href="#skill" className='co'>Skills</a></li>
                <li><a href="#pro" className='co'>Projects</a></li>
                <li><a href="#contact"className='co'>Contact</a></li>
            </ul>
         </nav>
    </header>
    </>
};