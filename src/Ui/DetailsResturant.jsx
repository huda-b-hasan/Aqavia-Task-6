import orderIcon from "../Image/orderIcon.svg";
import plusSequre from "../Image/plusSequre.svg";
import fileStand from "../Image/fileStand.svg";
import leftArrow from "../Image/leftArrow.svg";
import monthlyRecord from "../Image/monthlyRecord.svg";
import percent from "../Image/percent.svg";
import dailyRecord from "../Image/dailyRecord.svg";
import pallete from "../Image/pallete.png";
import CardWithImg from "./CardWithImg";

export default function DetailsResturant() {
  return (
    <div className=" shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-lg bg-white p-3 py-5">
      <h5 className="text-[#191C1E] border-r-5 px-2  ">
        تفاصيل المطعم والإدارة
      </h5>
      <div className="my-5">
        <div>
          <h6 className="text-sm text-[#44474D] mb-2">إدارة الوجبات</h6>
          <div className="flex w-full max-sm:flex-col items-center justify-between gap-2 ">
            <button className=" flex flex-col  items-center justify-center border text-center border-[#E0E3E5] text-[#191C1E] font-bold rounded-lg w-1/2 max-md:w-full py-5">
              <img src={orderIcon} alt="" />
              <span>قائمة الوجبات</span>
            </button>
            <button className=" flex flex-col  items-center justify-center border text-center border-[#E0E3E5] text-[#191C1E] font-bold rounded-lg w-1/2 max-md:w-full py-5">
              <img src={plusSequre} alt="" />
              <span>إضافة وجبة </span>
            </button>
          </div>
        </div>
        <div className="py-4 border-y border-[#E0E3E5] my-4">
          <h6 className="text-sm text-[#44474D] mb-2">الطلبات والتقارير </h6>
          <button className="flex items-center rounded-lg bg-[#F2F4F6] py-3 px-2 w-full justify-between">
            <div className="flex items-center gap-2">
              <img src={fileStand} alt="" />
              <h5 className="text-[#191C1E] text-lg">الطلبات حسب الحالة</h5>
            </div>
            <img src={leftArrow} className="w-3 h-3" />
          </button>
          <div className="flex w-full max-sm:flex-col items-center justify-between gap-2 mt-4 ">
            <button className=" bg-[#F2F4F6] py-3 px-2 w-1/2 max-sm:w-full flex gap-2 rounded-lg  items-center justify-start">
              <img src={dailyRecord} alt="" />
              <span>تقرير يومي </span>
            </button>
            <button className=" bg-[#F2F4F6] py-3 px-2 w-1/2 max-sm:w-full flex gap-2 rounded-lg  items-center justify-start">
              <img src={monthlyRecord} alt="" />
              <span>تقرير شهري</span>
            </button>
          </div>
        </div>
        <div>
          <h6 className="text-sm text-[#44474D] mb-2">
            إعدادات العمولة والتوصيل{" "}
          </h6>
          <form action="" className="w-full">
            <label className="text-sm text-[#44474D] w-full mt-2">
              تحديث نسبة العمولة
            </label>
            <div className="flex items-center justify-between p-2 my-2 border-2 rounded-lg border-[#E0E3E5]">
              <input
                type="text"
                placeholder="15"
                className="grow text-black text-lg"
              />
              <img src={percent} alt="" />
            </div>
            <label className="text-sm text-[#44474D] w-full mt-2">
              {" "}
              إعدادات منطقة التوصيل (كم){" "}
            </label>
            <div className="flex items-center justify-between p-2 my-2 border-2 rounded-lg border-[#E0E3E5]">
              <input
                type="text"
                placeholder="15"
                className="grow text-black text-lg"
              />
            </div>
            <button className="rounded-lg w-full py-3 text-center text-white  bg-[#0D1C32]">
              حفظ التعديلات
            </button>
          </form>
        </div>
      </div>
      <CardWithImg img={pallete} title={"توسيع نطاق الخدمات اللوجستية"} description={" انضم إلى برنامج برستيج بلس لزيادة المبيعات بنسبة 25%"}/>
    </div>
  );
}
