import { configureStore } from "@reduxjs/toolkit";
import converter from "@/store/converter";

const store = configureStore({
  reducer: {
    converter,
  },
});

export default store;
