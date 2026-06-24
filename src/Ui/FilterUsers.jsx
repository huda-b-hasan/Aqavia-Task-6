import { IoSearch } from "react-icons/io5";

export default function FilterUsers() {
  return (
    <form
      action=""
      className="flex max-md:flex-wrap items-start gap-3 mt-3 max-md:gap-2 w-full bg-white p-5 border-[#F1F5F9] rounded-lg  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
    >
      <div className="grow">
        <h6 className="text-[#64748B] text-sm font-bold mb-2">
          البحث عن مستخدم
        </h6>
        <div className="flex items-center justify-start px-3 max-md:px-1 py-1 gap-2 border-2 border-[#F1F5F9] rounded-xl">
          <IoSearch className="text-[#94A3B8] w-5 h-5" />
          <input
            name="search"
            type="text"
            placeholder="الاسم، البريد الإلكتروني، أو رقم الجوال..."
            className="text-lg text-[#6B7280] w-full"
          />
        </div>
      </div>
      <div>
        <h6 className="text-[#64748B] text-sm font-bold  mb-2">
          تصفية حسب المدينة
        </h6>
        <select
          name="city"
          className="border-2 border-[#F1F5F9] rounded-xl px-3 max-md:px-1 py-1.5"
        >
          <option value="syria">سوربا</option>
          <option value="lebanon">لبنان</option>
          <option value="palastin">فلسطين</option>
          <option value="all">
            جميع المدن
          </option>
        </select>
      </div>
      <div>
        <h6 className="text-[#64748B] text-sm font-bold  mb-2">الحالة</h6>
        <select
          name="status"
          className="border-2 border-[#F1F5F9] rounded-xl px-3 max-md:px-1 py-1.5"
        >
          <option value="all" >
            الكل
          </option>
        </select>
      </div>
      <button className="bg-[#F8FAFC] text-[#475569] text-sm text-center px-3 py-2 items-end ">
        تصفية النتائج
      </button>
    </form>
  );
}
