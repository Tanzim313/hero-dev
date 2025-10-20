import React from "react";
import { Link } from "react-router";
import { Github } from 'lucide-react';
import hero from "../../assets/logo.png";


const Navbar =()=>{
    const links = <>

                    <Link to='/' ><li className="font-bold">Home</li></Link>
                    <Link to='/allapps'><li className="font-bold">Apps</li></Link>
                    <Link to='/installation'><li className="font-bold">Installation</li></Link>
            
            </>

    return(
        <div>

            <div className="navbar bg-base-100 shadow ">
  <div className="navbar-start sm:hidden">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
  </div>
  <div className="navbar-center sm:navbar-start flex flex-row ">
    <img className="w-8 h-8" src={hero} alt="" />
    <a className="btn btn-ghost text-xl">
      <Link to='/' >HERO.IO</Link>
      </a>
  </div>

  <div className="navbar-center hidden sm:flex ">
    <ul className="menu menu-horizontal px-1 space-x-2 ">
        {links}
    </ul>
  </div>
  
  <div className="navbar-end">
    <button 
    onClick={()=>window.open('https://github.com/Tanzim313','_blank')} 
    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md min-w-[100px] h-[40px] text-center flex items-center p-2"> <Github /> Contribute </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;