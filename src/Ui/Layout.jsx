import { useState } from "react";
import NavAside from "./NavAside";
import NavTop from "./NavTop";
import { Outlet } from 'react-router-dom';
export default function Layout() {
  const [openNAvAside, setOpenNAvAside] = useState(false);
  function handleChangeNavAside() {
    setOpenNAvAside(!openNAvAside);
    console.log("hi");
  }
  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ direction: "rtl" }}>
      <div className="flex h-full w-full">
        {/* nav aside  */}
        <nav
          className={`bg-white w-[18%] max-lg:w-[25%] md:block max-md:bg-whi ${openNAvAside ? "block" : "hidden"} max-md:w-full max-md:absolute max-md:top-20 max-xsm:top-24 z-50 shrink-0`}
        >
          <NavAside />
        </nav>
        
        {/* main section  */}
        <main className="flex-1 w-full min-w-0 bg-[#F8FAFC] relative">
          {/* nav top  */}
          <nav className="sticky top-0 left-0 w-full z-40">
            <NavTop handleChangeNavAside={handleChangeNavAside} />
          </nav>
          <div className="w-full px-7 max-md:px-4 max-sm:px-2 py-5 box-border">
             <Outlet/>
          </div>
        </main>
      </div>
    </div>
  );
}