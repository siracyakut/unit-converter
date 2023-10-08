"use client";

import { useEffect } from "react";
import { pxToRem, remToPx } from "@/utils/conversions";
import { useConverter } from "@/store/converter/hooks";
import { setEffect, setMode, setPx, setRem } from "@/store/converter/actions";
import classNames from "classnames";

const Input = ({ name, shortName }) => {
  const converter = useConverter();

  const isTyping = () => {
    let value;
    if (converter.mode === "rem") {
      value = converter.pxValue;
    } else if (converter.mode === "px") {
      value = converter.remValue;
    }
    return value.toString().replace(/\s+/, "").length > 0;
  };

  useEffect(() => {
    if (converter.mode === "rem") {
      setRem(pxToRem(converter.pxValue, converter.rootSize));
    } else if (converter.mode === "px") {
      setPx(remToPx(converter.remValue, converter.rootSize));
    }
  }, [converter.pxValue, converter.remValue, converter.rootSize]);

  useEffect(() => {
    if (isTyping()) {
      const timeout = setTimeout(() => {
        setEffect(false);
      }, 250);

      return () => {
        setEffect(true);
        clearTimeout(timeout);
      };
    } else {
      setEffect(false);
    }
  }, [converter.pxValue, converter.remValue]);

  const handleChange = (e) => {
    const input = e.target.value;

    if (input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
      if (e.target.name === "px") {
        setPx(input);
      } else if (e.target.name === "rem") {
        setRem(input);
      }
    }
  };

  return (
    <label className="flex flex-col items-center justify-center text-xl gap-2 relative">
      {name}
      <input
        className={classNames(
          "appearance-none text-center border outline-none w-80 h-14 pl-4 pr-12 py-4 font-normal text-[38.4px] transition-all",
          {
            "text-[#1A79FF]": converter.mode === shortName,
            "border-[#DCDCDC]": !(
              converter.mode === shortName && converter.effect === true
            ),
            "border-[#1A79FF] bg-[#F6F9FD]":
              converter.mode === shortName && converter.effect === true,
          },
        )}
        autoComplete="off"
        name={shortName}
        value={shortName === "px" ? converter.pxValue : converter.remValue}
        onPaste={(e) => e.preventDefault()}
        onChange={(e) => handleChange(e)}
        onFocus={(e) => setMode(e.target.name === "px" ? "rem" : "px")}
      ></input>
      <span className="absolute top-[50px] right-4 pointer-events-none">
        {shortName}
      </span>
    </label>
  );
};

export default Input;
