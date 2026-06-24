export default function StatCard({ statInfo }) {
  const variants = {
    light: "bg-white border",
    dark: "bg-[#0D1C32]",
  };
  let Card;
  if (statInfo.type == "overView") {
    Card = (
      <div
        className={`rounded-lg border-[#F1F5F9] p-4 max-sm:px-2 pb-6 flex flex-col gap-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${variants[statInfo.variant]}`}
      >
        <div className="flex  justify-between items-center ">
          <img src={statInfo.icon} alt="" />
          {statInfo.children}
        </div>
        <h3 className="text-[#64748B] text-lg ">{statInfo.title}</h3>
        <p className="text-2xl font-bold">{statInfo.value}</p>
      </div>
    );
  } else if (statInfo.type == "daily") {
    Card = (
      <div
        className={`rounded-lg border-[#F1F5F9] p-4 max-sm:px-2 pb-6 flex flex-col gap-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${variants[statInfo.variant]} `}
      >
        <div className="flex  items-center gap-2">
          {statInfo.color != null ? (
            <span className={`w-3 h-3 ${statInfo.color} rounded-full `} />
          ) : (
            ""
          )
         }
          <h3 className="text-[#64748B] text-xl ">{statInfo.title}</h3>
        </div>
        <p className="text-2xl font-bold">{statInfo.value}</p>
        {statInfo.children}
      </div>
    );
  } else {
    Card = (
      <div
        className={`rounded-lg border-[#F1F5F9] p-4 max-sm:px-2 pb-6 flex flex-col gap-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${variants[statInfo.variant]} ${statInfo.color}`}
      >
        <div className="flex  justify-between items-center ">
          <h3 className="text-[#64748B] text-lg ">{statInfo.title}</h3>
          <img src={statInfo.icon} alt="" />
        </div>
        <p className="text-2xlfont-bold text-white">{statInfo.value}</p>
        <p className="text-[#64748B] text-sm ">{statInfo.footerTitle}</p>
      </div>
    );
  }
  return <>{Card}</>;
}
