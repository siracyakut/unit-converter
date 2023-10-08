import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 lg:px-14 py-7 w-full h-12 text-black">
      <p className="flex items-center gap-2 font-bold">
        UNIT CONVERTER<span className="font-normal text-xs">v1.2</span>
      </p>
      <GiHamburgerMenu size={25} className="cursor-pointer" />
    </div>
  );
};

export default Header;
