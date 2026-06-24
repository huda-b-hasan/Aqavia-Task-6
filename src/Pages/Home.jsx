import DriverTable from "../Ui/DriverTable";

import StatCard from "../Ui/StatCard";
import TitleMain from "../Ui/TitleMain";

import { StatConfig } from "../config/Config";
import { lastOrdersConfig,lastOrderssHead } from "../config/Config";
import { driverConfig } from "../config/Config";
import Layout from "../Ui/Layout";
import Table from "../Ui/Table";

export default function Home() {
  return (
    <Layout>
      <>
        <div>
          <div className="mb-5">
            {/* title section  */}
            <TitleMain
              title={"نظرة عامة على العمليات"}
              description="  مرحباً بك مجدداً، إليك ملخص نشاط Prestige Logistics اليوم."
            />
          </div>
          {/* stat Cards */}
          <div className="grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))]   gap-3">
            {StatConfig.map((stat, index) => {
              return <StatCard key={index} statInfo={stat} />;
            })}
          </div>
          {/* close stat cards */}
        </div>
        <div className="flex max-lg:flex-col items-start  gap-3 my-4 ">
          {/* Last Orders Table  */}
          <div className="w-[65%] max-lg:w-full">
            <Table columns={lastOrderssHead} config={lastOrdersConfig} title={"اخر الطلبات"} buttonText={"عرض الكل "}/>
          </div>
          <div className="w-[35%] max-lg:w-full">
            <DriverTable config={driverConfig} />
          </div>
          {/* Close Last Orders Table  */}
        </div>
      </>
    </Layout>
  );
}
