export default function LogoNav({ Img }) {
  return (
    <div className="flex flex-col items-center pb-6">
      <img src={Img} alt="" className="pb-1" />
      <h2 className="text-xl text-[#0A192F] font-extrabold mb-2">Prestige</h2>
      <p className="text-sm font-medium text-[#94A3B8] tracking-wider">
        MANAGEMENT PORTAL
      </p>
    </div>
  );
}
