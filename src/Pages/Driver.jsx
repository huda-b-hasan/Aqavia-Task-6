import Button from "../Ui/Button";
import Layout from "../Ui/Layout";
import TitleMain from "../Ui/TitleMain";
import Table from "../Ui/Table";
import CurrentDriver from "../Ui/CurrentDriver";
import RecordDriver from "../Ui/RecordDriver";
import StatCard from "../Ui/StatCard";

import plus from "../Image/plus.svg";
import lock from "../Image/lock.svg";
import { DriverConfig,DriverHead,StatDriverConfig } from "../config/Config";
export default function Driver() {
  return (
    <Layout>
      <>
        <div className="mb-5">
          {/* title section  */}
          <TitleMain
            title="إدارة السائقين"
            description="نظرة عامة على حالة الأسطول وإدارة العمليات اليومية"
          >
            <Button
              title="إنشاء حساب سائق"
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
        <div className="grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))]   gap-3">
          {StatDriverConfig.map((stat, index) => {
            return <StatCard key={index} statInfo={stat} />;
          })}
        </div>
        {/* close stat cards */}
        <div className="flex max-lg:flex-col items-start  gap-3 mt-5"> 
          <div className="w-[70%] max-lg:w-full">
            <CurrentDriver />
          </div>
          <div  className="w-[30%] max-lg:w-full">
                <RecordDriver/>
          </div>
        </div>
        <div className="my-4">
          <Table columns={DriverHead} config={DriverConfig}/>
        </div>
      </>
    </Layout>
  );
}
