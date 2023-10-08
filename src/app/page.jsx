import Tables from "@/components/tables";
import BaseSize from "@/components/base-size";
import ConvertArea from "@/components/convert-area";
import About from "@/components/about";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col items-center gap-14 justify-center">
      <ConvertArea primary="px" />
      <BaseSize />
      <Tables />
      <About />
    </div>
  );
};

export default Home;
