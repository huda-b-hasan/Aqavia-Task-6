import Button from "../Ui/Button";
import Layout from "../Ui/Layout";
import TitleMain from "../Ui/TitleMain";
import Table from "../Ui/Table";

import StatCard from "../Ui/StatCard";
import { StatPromoConfig, PromoHead, PromoConfig } from "../config/Config";

import plus from "../Image/plus.svg";


export default function PromoCodes() {
  return (
    <Layout>
      <>
        <div className="mb-5">
          {/* title section  */}
          <TitleMain
            title=" إدارة أكواد الخصم  "
            description="   إدارة وتتبع فعالية الحملات الترويجية وقسائم الشراء "
            subTitle="1,284 مستخدم"
          >
            <Button
              title="إضافة كود جديد "
              icon={plus}
              color={"white"}
              bgColor={"#0D1C32"}
            />
          </TitleMain>
        </div>
        <div className="grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))]   gap-3">
          {StatPromoConfig.map((stat, index) => {
            return <StatCard key={index} statInfo={stat} />;
          })}
        </div>
        <div className="my-4">
          <Table columns={PromoHead} config={PromoConfig} title="قائمة الأكواد" />
        </div>
        <div>
          <div>
            <CardWithImg title="تحليل أداء الحملات" description="اكتشف أي الأكواد تحقق أعلى نسبة مبيعات وأفضل وصول للعملاء."/>
          </div>
          <div>
            
          </div>
        </div>
      </>
    </Layout>
  );
}
