import store from "@/store";
import {
  _setEffect,
  _setMode,
  _setPx,
  _setRem,
  _setRootSize,
} from "@/store/converter";

export const setMode = (data) => store.dispatch(_setMode(data));
export const setPx = (data) => store.dispatch(_setPx(data));
export const setRem = (data) => store.dispatch(_setRem(data));
export const setEffect = (data) => store.dispatch(_setEffect(data));
export const setRootSize = (data) => store.dispatch(_setRootSize(data));
