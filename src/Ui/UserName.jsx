export default function UserName({photo,name,id}){
    return                   <div className="flex items-center gap-1 ">
                    <img src={photo} alt=""className="w-5" />
                    <div>
                      <h6 className="font-bold text-xs  max-md:text-xs text-[#0F172A]">
                        {name}
                      </h6>
                      <span className=" text-[#64748B] text-xs">{id}</span>
                    </div>
                  </div>
}