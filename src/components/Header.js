import {Bars3Icon} from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header(){
    const [toggle,setToggle]=useState(false);
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
         {toggle && <nav className='block md:hidden'>
                        <ul onClick={()=>setToggle(!toggle)} className='flex flex-col mv'>
                            <li><a href="/">Home</a></li>
                            <li><a href="#edu">Education</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><a href="#pro">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
         }
         <button onClick={()=>setToggle(!toggle)} className='absolute top-3 right-5 block md:hidden'><Bars3Icon className="size-4 text-black"/></button>

    </header>
    </>
};