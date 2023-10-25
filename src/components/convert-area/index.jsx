import Link from "next/link";
import { GoArrowSwitch } from "react-icons/go";
import Input from "@/components/input";

const ConvertArea = ({ primary }) => {
  return (
    <>
      <p className="text-3xl mt-24">
        {primary === "px" ? "PX to REM converter" : "REM to PX converter"}
      </p>
      <div className="flex items-center justify-center gap-10 lg:gap-5 flex-wrap">
        {primary === "px" ? (
          <>
            <Input name="Pixels" shortName="px" />
            <div className="flex items-center justify-center w-full md:w-auto md:mt-8 cursor-pointer">
              <Link href="/rem-to-px">
                <GoArrowSwitch size={24} />
              </Link>
            </div>
            <Input name="REM" shortName="rem" />
          </>
        ) : (
          <>
            <Input name="REM" shortName="rem" />
            <div className="flex items-center justify-center w-full md:w-auto md:mt-8 cursor-pointer">
              <Link href="/">
                <GoArrowSwitch size={24} />
              </Link>
            </div>
            <Input name="Pixels" shortName="px" />
          </>
        )}
      </div>
    </>
  );
};

export default ConvertArea;
