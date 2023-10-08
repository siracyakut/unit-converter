import PxTable from "@/components/tables/px-table";
import RemTable from "@/components/tables/rem-table";

const Tables = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h3 className="text-2xl mt-24">PX ↔︎ REM conversion tables</h3>
      <h6 className="text-xs text-zinc-400">
        (Tables based on a root font-size of 16 pixel.)
      </h6>
      <div className="flex justify-center flex-wrap gap-10 mt-6">
        <PxTable />
        <RemTable />
      </div>
    </div>
  );
};

export default Tables;
