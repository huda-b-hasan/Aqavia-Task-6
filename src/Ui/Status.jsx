export default function Status({title}) {
        const styleStatus= {
           "on drive":"bg-[#EFF6FF] text-[#2563EB]",
            "done":"text-[#059669] bg-[#ECFDF5]",
            "on progress":"text-[#D97706] bg-[#FFFBEB]",
            "cancel":"text-[#DC2626] bg-[#FEF2F2]",
            "active":"text-[#15803D] bg-[#F0FDF4]",
            "inactive":"text-[#64748B] bg-[#F1F5F9]",
            "no":"text-[#1D4ED8] bg-[#EFF6FF]",
            "yes":"text-[#475569] bg-[#F1F5F9]"
        }
  return (
    <span
      className={`rounded-xl p-2 max-sm:px-0 text-sm max-sm:text-xs font-bold text-center ${styleStatus[title]}`}
    >
      {title}
    </span>
  );
}
