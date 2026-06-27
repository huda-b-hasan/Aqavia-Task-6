import Button from "../Ui/Button";
import TitleMain from "../Ui/TitleMain";
import Table from "../Ui/Table";

import { ResturantHead,ResturantConfig } from "../config/Config";

import plus from "../Image/plus.svg";
import lock from "../Image/lock.svg";
import DetailsResturant from "../Ui/DetailsResturant";
import ResturantState from "../Ui/ResturantState";
export default function Restaurants() {
  return (
      <>
        <div className="mb-5">
          {/* title section  */}
          <TitleMain
            title="إدارة المطاعم"
            description="نظرة عامة والتحكم في شركاء الطعام والخدمات اللوجستية"
            subTitle="1,284 مستخدم"
          >
            <Button
              title="إضافة مطعم"
              icon={plus}
              color={"white"}
              bgColor={"#0D1C32"}
            />
            <Button
              title="إعادة تعيين كلمة المرور"
              icon={lock}
              color={"#44474D"}
              bgColor={"#ffffff"}
            />
          </TitleMain>
        </div>
        {/* stat Cards */}
        <div className="grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))]   gap-3 mb-4">
          <ResturantState />
        </div>
        {/* close stat cards */}
        <div className="flex max-lg:flex-col items-start gap-5">
          <div className="w-[60%] max-lg:w-full">
            <Table columns={ResturantHead} config={ResturantConfig} title={"قائمة المطاعم الشريكة"} buttonText={"طباعه التقرير"} />
          </div>
          <div className="w-[40%] max-lg:w-full">
            <DetailsResturant />
          </div>
        </div>
      </>
  );
}
