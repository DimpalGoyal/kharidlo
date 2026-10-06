import { FiShoppingCart, FiUser } from "react-icons/fi";
import { HeaderCard } from "./HeaderCard";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Input } from "./Input";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-blue-500 flex flex-wrap text-white justify-between sm:mx-20 p-3 sm:rounded-2xl 
    text-xl shadow-lg/30 shadow-black font-medium sm:my-3 items-center "
    >
      <div className="flex gap-20 ">
        <Link to="/">Kharidlo</Link>
        <div className="hidden sm:block">
          <div className=" flex gap-3">
            <Input placeholder="search" />
            <Button text="search" />
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex gap-2 lg:gap-5 items-center ">
          <HeaderCard text="card" logo={<FiShoppingCart />} />
          <HeaderCard text="login" logo={<FiUser />} />
        </div>
      </div>
      <div
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        className="sm:hidden text-2xl"
      >
      =
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden basis-full pl-15 pb-4 mt-20 space-y-4 w-full space-x-3.5">
          <Input placeholder="search" />
            <Button text="search" />
          <div className="mt-4 space-y-5">
            <HeaderCard text="card" logo={<FiShoppingCart />} />
            <HeaderCard text="login" logo={<FiUser />} />
          </div>
        </div>
      )}
    </nav>
  );
}
