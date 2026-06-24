export default function LinkNav ({href,title,Icon , active , color}){
    return <a href={href} 
     className={`flex flex-row-reverse  items-center gap-3 py-3 px-4 w-full  border-y-0 border-l-0  rounded-l-sm  ${active? "bg-[#F1F5F9] text-[#0A192F] border border-r-6 border-[#0A192F] ":"text-[#64748B]"} hover:bg-[#F1F5F9]  hover:text-[#0A192F] transition-all duration-150s `}>
        <img src={Icon} alt="home" />
        <h3 className={`font-medium text-sm  capitalize tracking-wide ${color==null?"":"text-red-700"}`}>
            {title}
        </h3>
    </a>
}