import { CurrentDriverConfig } from "../config/Config";
import bigCar from "../Image/bigCar.svg";
import location from "../Image/location.svg";
import Button from "./Button";

export default function CurrentDriver() {
  const config = CurrentDriverConfig;
  return (
    <div className="p-6 w-full h-full rounded-xl bg-[#0D1C32]  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ">
      <h4 className="text-[#76849F] font-bold ">السائق الحالي بالدور</h4>
      <div className="flex items-center justify-start gap-3 my-6 ">
        <img src={config.photo} alt="" />
        <div className="mr-5">
          <h5 className="text-white font-bold text-2xl max-lg:text-lg mb-4">{config.name}</h5>
          <div className="flex items-center gap-3 text-white ">
            <div className="flex items-center gap-2 ">
              <img src={bigCar} alt="" />
              <span className="text-sm max-lg:text-xs">:{config.numCar}</span>
            </div>
            <div className="flex items-center gap-2 ">
              <img src={location} alt="" />
              <span className="text-sm  max-lg:text-xs">:{config.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-3">
        <Button title="تخطي الدور" color={"white"} bgColor={"#0D1C32"} />
        <Button title="إسناد طلب جديد" color={"#44474D"} bgColor={"#ffffff"} />
      </div>
    </div>
  );
}
