import FilterUsers from "../Ui/FilterUsers";
import TitleMain from "../Ui/TitleMain";
import Button from "../Ui/Button";
import { UsersHead, UsersConfig } from '../config/Config';
import UserPlus from "../Image/UserPlus.svg";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import Layout from "../Ui/Layout";
import Table from "../Ui/Table";

export default function Users() {
  return (
    <Layout>
      <>
        <div className="mb-5">
          <TitleMain
            title={"إدارة المستخدمين"}
            description="إجمالي المستخدمين المسجلين: "
            subTitle="1,284 مستخدم"
          >
            <Button
              title="إضافة مستخدم جديد"
              icon={UserPlus}
              color={"white"}
              bgColor={"#0D1C32"}
            />
          </TitleMain>
        </div>
        
        <FilterUsers />
        
        <div className="my-4 w-full max-w-full overflow-hidden min-w-0">
          <Table columns={UsersHead} config={UsersConfig} />
        </div>

        <div className="w-full py-5 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#F1F5F9] mt-2">
          <div className="text-[#64748B] text-sm text-center md:text-right">
            عرض <span className="font-semibold">1</span> إلى <span className="font-semibold">10</span> من أصل <span className="font-semibold">1,284</span> مستخدم
          </div>
          
          <div className="flex items-center rounded-xl text-[#475569] text-xs sm:text-sm overflow-hidden select-none">
            <span className="p-2 sm:p-3 border border-[#E2E8F0] cursor-pointer hover:bg-slate-50">
              <CgArrowRight className="text-base" />
            </span>
            <span className="p-2 sm:p-3 border-y border-l border-[#E2E8F0] bg-[#0D1C32] text-white cursor-pointer">1</span>
            <span className="p-2 sm:p-3 border-y border-l border-[#E2E8F0] cursor-pointer hover:bg-slate-50">2</span>
            <span className="p-2 sm:p-3 border-y border-l border-[#E2E8F0] cursor-pointer hover:bg-slate-50">3</span>
            <span className="p-2 sm:p-3 border-y border-l border-[#E2E8F0] tracking-wider">...</span>
            <span className="p-2 sm:p-3 border-y border-l border-[#E2E8F0] cursor-pointer hover:bg-slate-50">1,284</span>
            <span className="p-2 sm:p-3 border border-[#E2E8F0] cursor-pointer hover:bg-slate-50">
              <CgArrowLeft className="text-base" />
            </span>
          </div>
        </div>
      </>
    </Layout>
  );
}