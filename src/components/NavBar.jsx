import CustomLink from "./customElems/CustomLink";
import CustomButton from "./customElems/CustomButton";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative bg-black p-6 flex items-center justify-between w-screen">
        <div className="text-white font-[Inria_Serif] tracking-[5px] underline underline-offset-[6px] decoration-[#ff0000] ">
          GANGSTER
        </div>
        <ul className="hidden md:flex md:gap-9">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/" title="Shop" />
          <CustomLink href="/" title="Collections" />
          <CustomLink href="/" title="About" />
          <CustomLink href="/" title="Contact" />
        </ul>
        <div className=" hidden md:flex md:gap-2 md:items-center ">
          <div
            style={{ alignItems: "center" }}
            className="text-white flex gap-2 rounded item-center border border-white px-2  py-1 "
          >
            <CiSearch className="h-fit " />
            <input
              type="text"
              placeholder="Search..."
              className="w-[100px] bg-black outline-none text-white placeholder:text-sm"
            ></input>
          </div>
          <CustomLink href={"/login"} title={<CustomButton title="login" className="w-30"/>} />
        </div>
        <div className="text-white font-2xl flex gap-2 items-center  md:hidden">
          <CiSearch className="cursor-pointer" />
          <CiMenuBurger
            className="cursor-pointer mr-0"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <>
          <div className="absolute z-4 transition-all-3  h-screen  bg-black bg-opacity-40 flex justify-end  md:hidden">
            <div className="h-full w-70 bg-red-400 ">
              <ul className="flex flex-col gap-4 items-center p-5 ">
                <li>
                  <CustomLink href="/" title="Home" />
                </li>
                <li>
                  {" "}
                  <CustomLink href="/" title="Shop" />
                </li>
                <li>
                  <CustomLink href="/" title="Collections" />
                </li>
                <li>
                  <CustomLink href="/" title="About" />
                </li>
                <li>
                  <CustomLink href="/" title="Contact" />
                </li>
                <li>
                  <CustomButton title="login" />
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
