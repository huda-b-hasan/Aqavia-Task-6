
export default function DriverTable({ config }) {
  return (
    <div className="bg-white rounded-lg border-[#F1F5F9] h-full px-4  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <h5 className="text-[#0F172A] text-xl py-4 ">سائقون متميزون اليوم</h5>
      <div className="flex flex-col gap-6">
        {config.map((driver, index) => {
          return (
            <div key={index} className="flex items-center  justify-between">
              <div className="flex items-center gap-3 ">
                <img src={driver.photo} alt="" />
                <div>
                  <h6 className="font-bold text-sm  max-sm:text-xs text-[#0F172A]" >
                    {driver.name}
                    </h6>
                  <span className=" text-[#64748B] text-xs">
                     {driver.flightNum}  رحلات • تقييم {driver.ratting}
                  </span>
                </div>
              </div>
              <div>
                    <p className="text-[#2563EB] font-extrabold text-sm">
                        {driver.TodayRevenue}
                    </p>
                    <span  className=" text-[#64748B] text-xs">
                        إيرادات اليوم
                    </span>
              </div>
            </div>
          );
        })}
      </div>
      <button className="p-3 max-sm:text-sm my-4 text-[#475569] bg-[#f1f5f9ba] w-full hover:bg-[#F1F5F9] rounded-lg">
            مراقبة جميع السائقين
      </button>
    </div>
  );
}
