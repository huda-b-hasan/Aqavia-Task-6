export default function TitleMain ({title,description,subTitle,children}){
    return  <div className="flex max-sm:flex-col max-sm:gap-4 items-center max-sm:items-start  justify-between">
                <div className="">
                    <h2 className="text-[#191C1E] text-xl font-bold mb-1 ">
                        {title}
                    </h2>
                    <p className="text-[#44474D] text-sm font-thin ">
                     {description}
                     <span className="text-black font-bold">{subTitle}</span>
                    </p>
                    
                </div>
                <div className="flex items-center gap-3">
                    {children}
                </div>
            </div>
}