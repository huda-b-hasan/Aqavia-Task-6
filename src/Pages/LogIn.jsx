import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import { admin } from '../config/Config';

import LogInPhoto from '../Image/LogInPhoto.png'
import globe from '../Image/globe.png'
import checkSave from '../Image/checkSave.png'

import { HiArrowRight, HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
export default function LogIn(){
    const [showPassword,setShowPassword]=useState(false);
    const [formData,setFormData]=useState({email:'admin@test.com',password:'123',rememberMe:false})

    const navigate = useNavigate();

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(e.target.name=="rememberMe"){
        setFormData({...formData,rememberMe:!formData.rememberMe})
    }
   };

   function handleSubmit(e) {
    e.preventDefault();
    if (formData.email === admin.email && formData.password === admin.password) {
      navigate('/home'); 
    } else {
      console.log("error")
    }
  };
    return <div className=" md:h-screen flex items-center max-md:flex-col-reverse  ">
        {/* photo section */}
        <div className=" bg-[#0D1C32] h-full  max-md:min-h-screen w-1/2 max-md:w-full flex flex-col pb-4 ">
            <div className='flex flex-col items-center justify-center gap-3 w-full  grow'>
                <img className="opacity-<10> w-1/2" src={LogInPhoto} alt="login" />
                <h2 className="text-white text-lg font-normal ">
                    CulinaryLogix
                </h2>
                <p className="leading-6 text-[#76849F] text-center w-1/2">
                    Architectural precision in restaurant logistics and driver
                    fleet management. Secure, reliable, and authoritative
                    control at your fingertips.
                </p>
            </div>
            <div className='flex items-center gap-2 p-3 bg-[rgba(255,255,255,0.1)] w-fit ml-5'>
                <img src={checkSave} alt="" srcset=""
                className='text-sm' />
                <span className='text-sm text-white'>ENCRYPTED TERMINAL ACCESS</span>
            </div>
        </div>
        {/* form section */}
        <div className=" bg-[#F7F9FB] h-full max-md:min-h-screen w-1/2 max-md:w-full flex flex-col    "> 
            <div className="flex items-center justify-between p-4">
                <button className="flex items-center gap-1 font-normal cursor-pointer text-sm text-[#0D1C32]"
                onClick={console.log("arabic")}>
                    <img src={globe} alt="" />
                    العربية
                
                </button>
                <button className="text-[#44474D] text-sm font-normal cursor-pointer">
                    SUPPORT
                </button>
            </div> 
            <div className=" grow w-3/4 max-sm:w-full max-sm:px-5 m-auto flex flex-col   justify-center ">
                <div className="mb-4">
                    <h1 className="font-normal text-3xl text-[#191C1E] mb-2 "> 
                        Welcome Back
                    </h1>
                    <p className="font-normal text-lg text-[#44474D]">
                        Please authenticate to access the management portal.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="w-full">
                    <label htmlFor="email" className="text-sm text-[#44474D] ">
                        EMAIL ADDRESS
                    </label>
                    <div className="mb-6 bg-white border border-[#E2E8F0] rounded-sm mt-2 py-4 px-4 flex items-center gap-3" >
                        <span className="self-start">
                            <HiOutlineMail className=" h-6 w-6 text-[#75777E]"/>
                        </span>
                        <input
                        value={formData.email}
                        onChange={handleChange}
                        className="grow text-[#CBD5E1] text-lg "
                        type="email" id="email" name="email" placeholder="admin@culinarylogix.com" />
                    </div>
                    <label htmlFor="password" className="text-sm text-[#44474D] ">
                    PASSWORD
                    </label>
                    <div className="mb-6 bg-white border border-[#E2E8F0] rounded-sm mt-2 py-4 px-4 flex items-center gap-3 " >
                        <span className="self-start">
                            <HiOutlineLockClosed className=" h-6 w-6 text-[#75777E]"/>
                        </span>
                        <input  
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        type={ showPassword?"text":"password"} className="grow text-[#CBD5E1] text-lg "
                        placeholder="" />
                        <span  className="self-start"
                        onClick={()=>{setShowPassword(!showPassword)}}>
                            {showPassword ?  <AiOutlineEyeInvisible className=" h-6 w-6 text-[#75777E]"/>:
                            <AiOutlineEye className=" h-6 w-6 text-[#75777E]"/>}
                        </span>
                    </div>
                    <div  className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                        <input
                        value={formData.rememberMe}
                        onChange={handleChange}
                        type="checkbox" 
                        id="rememberMe" 
                        name='rememberMe'
                        className=" border border-[#E2E8F0] rounded-sm"/>
                        <label  htmlFor="rememberMe" className="text-[#44474D] font-normal text-sm">
                            Remember me
                            </label>
                    </div>
                    <a href="" className="text-[#0D1C32] font-semibold text-sm ">Forgot password?</a>
                    </div>
                    <button
                    onClick={handleSubmit}
                    type="submit"
                     className="shadow-[0_4px_6px_-2px_rgba(13,28,50,0.02),0_10px_15px_-3px_rgba(13,28,50,0.05)] w-full cursor-pointer flex items-center justify-center gap-2 bg-[#0D1C32] text-white py-4 text-center mt-6 rounded-sm text-lg font-normal">
                        SIGN IN TO PORTAL
                        <HiArrowRight className="h-5 w-5"/>
                    </button>
                </form>
            </div>
            <div className="flex items-center justify-between p-4">
                <p className="text-[8px] text-[#94A3B8] tracking-wide">
                    © 2024 CULINARYLOGIX SOLUTIONS. ARCHITECTURAL PRECISION.
                </p>
                <div>
                    <span className="text-[8px] text-[#94A3B8] ml-1">SECURITY</span>
                    <span className="text-[8px] text-[#94A3B8] ml-1">TERMS</span>
                    <span className="text-[8px] text-[#94A3B8] ml-1">PRIVACY</span>
                </div>
            </div>
        </div>
    </div>
}