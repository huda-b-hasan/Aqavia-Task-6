import LinkNav from "./LinkNav";
import LogoNav from "./LogoNav";

import Logo from "../Image/Background.png";
import Home from "../Image/Home.svg";
import Users from "../Image/Users.svg";
import Drivers from "../Image/Drivers.svg";
import Restaurants from "../Image/Restaurants.svg";
import Ads from "../Image/Ads.svg";
import PromoCodes from "../Image/PromoCodes.svg";
import Orders from "../Image/Orders.svg";
import Fiance from "../Image/Fiance.svg";
import Settings from "../Image/Settings.svg";
import LogOut from "../Image/LogOut.svg";
import { useLocation } from "react-router";

export default function NavAside() {
  const location = useLocation();

  return (
    <div className="w-full h-full border-l border-[#E2E8F0] py-3  flex flex-col justify-between gap-5 max-sm:pt-6">
      <div className="flex flex-col w-full px-2  ">
        <LogoNav Img={Logo} />
        <div className="flex flex-col">
          <LinkNav
            href="#/home"
            title="home"
            Icon={Home}
            active={location.pathname == "/home"}
          />
          <LinkNav
            href={"#/users"}
            title="users"
            Icon={Users}
            active={location.pathname == "/users"}
          />
          <LinkNav
            href={"#/drivers"}
            title="Drivers"
            Icon={Drivers}
            active={location.pathname == "/drivers"}
          />
          <LinkNav
            href={"#/restaurants"}
            title="Restaurants"
            Icon={Restaurants}
            active={location.pathname == "/restaurants"}
          />
          <LinkNav
            href={"#/ads"}
            title="Ads"
            Icon={Ads}
            active={location.pathname == "/ads"}
          />
          <LinkNav
            href={"#/promocodes"}
            title="Promo Codes"
            Icon={PromoCodes}
            active={location.pathname == "/promocodes"}
          />
          <LinkNav
            href={"#"}
            title="Orders Codes"
            Icon={Orders}
            active={location.pathname == ""}
          />
          <LinkNav
            href={"#"}
            title="Fiance"
            Icon={Fiance}
            active={location.pathname == ""}
          />
        </div>
      </div>
      <div className="px-2  ">
        <LinkNav
          href={"#"}
          title={"Settings"}
          Icon={Settings}
          active={location.pathname == "#"}
        />
        <LinkNav
          href="#/"
          title={"Log Out"}
          Icon={LogOut}
          color="red"
          active={location.pathname == "/"}
        />
      </div>
    </div>
  );
}