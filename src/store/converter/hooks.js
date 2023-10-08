import { useSelector } from "react-redux";

export const useConverter = () => useSelector((state) => state.converter);
