export default function Button({ title,color, icon, bgColor, handleChange }) {
  return (
    <button
      onClick={handleChange}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm max-sm:text-sx  text-${color=="white"?"white":`[${color}]`} border border-[${color}]  bg-[${bgColor}] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] `}
    >
      <img src={icon} alt=""  />
      {title}
    </button>
  );
}
