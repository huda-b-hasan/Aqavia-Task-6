import {  GiHamburgerMenu } from "react-icons/gi"
import {  HiOutlineBell, HiOutlineCog } from "react-icons/hi"
import { IoSearch } from "react-icons/io5"

export default function NavTop ({handleChangeNavAside}){
    return <div className="flex items-center justify-between px-2 py-4 bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2 ">
            <button
            className=" md:hidden p-4"
            onClick={()=>{handleChangeNavAside()}}>
                <GiHamburgerMenu className="text-[#94A3B8] w-5 h-5 "/>
            </button>
            <div className="flex items-center justify-start px-3 max-md:px-1 py-1 gap-2 bg-[#F8FAFC] rounded-xl">
                <IoSearch className="text-[#94A3B8] w-5 h-5"/>
                <input 
                name="search"
                type="text" 
                placeholder="....بحث"
                className="text-lg text-[#6B7280]" />
            </div>
        </div>
        <div className="pl-2 flex items-center gap-2">
            <a href="#">
                <HiOutlineBell className=" text-[#6B7280] text-2xl" />
            </a>          
            <a href="#">
                <HiOutlineCog className=" text-[#6B7280] text-2xl"/>
            </a>
        </div>
    </div>
}