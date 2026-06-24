import Button from "../Ui/Button";
import Layout from "../Ui/Layout";
import StatCard from "../Ui/StatCard";
import Table from "../Ui/Table";
import TitleMain from "../Ui/TitleMain";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { StatAdsConfig } from "../config/Config";
import { AdsHead,AdsConfig } from "../config/Config";
export default function Ads() {
  return (
    <Layout>
      <>
        <div className="mb-5">
          {/* title section  */}
          <TitleMain
            title="إدارة الإعلانات"
            description="تتبع وتحكم في جميع الحملات الإعلانية النشطة والمجدولة."
          >
            <Button
              title="إضافة إعلان جديد"
              color={"white"}
              bgColor={"#0D1C32"}
            />
          </TitleMain>
        </div>
        <div className="grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))]   gap-3">
          {StatAdsConfig.map((stat, index) => {
            return <StatCard key={index} statInfo={stat} />;
          })}
        </div>
        <div className="my-4">
                  <Table columns={AdsHead} config={AdsConfig}/>

        </div>
        {/* footer user show page num (reBuild) */}
        <div className="w-full p-3 py-5 flex items-center justify-between">
          <div className="text-[#64748B] text-sm ">
            عرض
            {"1"}
            إلى
            {"10"}
            من أصل
            {"1,284"}
            مستخدم
          </div>
          <div className="flex items-center rounded-xl text-[#475569] ">
            <span className="p-3 border border-[#E2E8F0]">
              <CgArrowRight />
            </span>
            <span className="p-3 border border-[#E2E8F0]">{"1"}</span>
            <span className="p-3 border border-[#E2E8F0]">{"2"}</span>
            <span className="p-3 border border-[#E2E8F0]">{"3"}</span>
            <span className="p-3">...</span>
            <span className="p-3 border border-[#E2E8F0]">{"1,284"}</span>
            <span className="p-3 border border-[#E2E8F0]">
              <CgArrowLeft />
            </span>
          </div>
        </div>
      </>
    </Layout>
  );
}
