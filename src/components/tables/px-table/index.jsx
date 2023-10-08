import pxNumbers from "@/mock/pxNumbers.json";

const PxTable = () => {
  return (
    <table className="w-52">
      <thead className="text-center font-bold border-b border-[#c0c0c0]">
        <tr>
          <th className="p-1">Pixels</th>
          <th className="p-1">REM</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {pxNumbers.map((number, idx) => (
          <tr
            className="even:bg-[#fdfdfd] odd:bg-[#f4f4f4] text-center"
            key={idx}
          >
            <td className="p-1">
              {number}
              <span className="font-medium text-[#c0c0c0]">px</span>
            </td>
            <td className="p-1">
              {parseFloat((number * 0.0625).toFixed(2))}
              <span className="font-medium text-[#c0c0c0]">rem</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PxTable;
