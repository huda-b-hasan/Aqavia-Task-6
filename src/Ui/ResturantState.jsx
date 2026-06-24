import { StatResturantConfig } from "../config/Config";

export default function ResturantState (){
    console.log (StatResturantConfig[1].colorBorder)
    return <>
              {StatResturantConfig.map((stat, index) => {
            return <div key={index} className={`bg-white rounded-xl px-2 py-5 border-b-2  `}
            style={{borderColor:`${stat.colorBorder}`}}>
                <div  className="flex items-center justify-between">
                    <div>
                                <h3 className="text-[#64748B] text-lg my-4 ">{stat.title}</h3>
                                <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <img src={stat.icon} alt="" />
                </div>
                    <p className="text-[#44474D]">
                        {stat.progress}
                    </p>
            </div>
          })}
    </>
}