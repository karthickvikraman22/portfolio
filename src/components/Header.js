import {Bars3Icon} from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header(){
    const [toggle,setToggle]=useState(false);
    return <>
    <header className="flex px-5 py-2 nav fixed w-full">
        <h1 className="font-bold text-black pr-5">Karthickvikraman</h1>
         <nav className="hidden md:block">
            <ul className="flex">
            <li><a href='index.html'>Home</a></li>
            <li><a href='index.html'>Skills</a></li>
            <li><a href='index.html'>Projects</a></li>
            <li><a href='index.html'>Contact</a></li>
            </ul>
         </nav>
         {toggle && <nav className='block md:hidden'>
                        <ul className='flex flex-col mv'>
                            <li><a href='index.html'>Home</a></li>
                            <li><a href='index.html'>Skills</a></li>
                            <li><a href='index.html'>Projects</a></li>
                            <li><a href='index.html'>Contact</a></li>
                        </ul>
                    </nav>
         }
         <button onClick={()=>setToggle(!toggle)} className='absolute top-3 right-5 block md:hidden'><Bars3Icon className="size-4 text-black"/></button>

    </header>
    </>
};