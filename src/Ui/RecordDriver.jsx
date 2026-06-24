import { AiOutlineFile } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

export default function RecordDriver (){
    return <div className="bg-white p-6 w-full h-full rounded-xl   shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ">
            <h4 className="text-[#191C1E] text-lg mb-2 ">
                تقارير الأداء
            </h4>
            <p className="text-xs text-[#44474D] mb-4">
                تحميل ملخصات الأداء التفصيلية لجميع السائقين والعمليات
            </p>
          <div className="flex items-center justify-between p-2 rounded-xl border border-[#E2E8F0] mb-2">
            <div className="flex items-center gap-2">
                <AiOutlineFile />
                <h6>
                    تقرير يومي
                </h6>
            </div>
            <BiDownload className="text-[#CBD5E1]"/>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl border border-[#E2E8F0] mb-2">
            <div className="flex items-center gap-2">
                <SlCalender />
                <h6>
تقرير شهري                </h6>
            </div>
            <BiDownload className="text-[#CBD5E1]"/>
          </div>
    </div>
}