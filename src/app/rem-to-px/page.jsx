import Tables from "@/components/tables";
import BaseSize from "@/components/base-size";
import ConvertArea from "@/components/convert-area";

const RemToPxPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center gap-14 justify-center">
      <ConvertArea primary="rem" />
      <BaseSize />
      <Tables />
    </div>
  );
};

export default RemToPxPage;
