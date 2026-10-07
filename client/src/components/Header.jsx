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
      className="bg-blue-500 flex flex-wrap sm:flex-nowrap text-white justify-between lg:mx-20 p-3 md:rounded-2xl 
    text-xl shadow-lg/40 shadow-black font-medium md:my-3 items-center fixed top-0.5 lg:top-5 right-0 left-0 "
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
        className="sm:hidden cursor-pointer text-2xl hover:bg-blue-950"
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
