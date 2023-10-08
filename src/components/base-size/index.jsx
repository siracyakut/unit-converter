"use client";

import { useEffect, useRef, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useConverter } from "@/store/converter/hooks";
import { setRootSize } from "@/store/converter/actions";

const BaseSize = () => {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const converter = useConverter();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", keyDown);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  const keyDown = (e) => {
    if (e.key === "Escape" || e.key === "Enter") {
      setEditMode(false);
      if (!parseFloat(inputRef.current.value)) {
        setRootSize(16);
      }
    }
  };

  const handleClick = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      e.target !== divRef.current &&
      e.target.innerText !== "font-size"
    ) {
      setEditMode(false);
      if (!parseFloat(inputRef.current.value)) {
        setRootSize(16);
      }
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;

    if (input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
      setRootSize(input);
    }
  };

  return (
    <div
      ref={divRef}
      onClick={() => {
        if (editMode === false) {
          setEditMode(true);
        }
      }}
      className="flex items-center justify-center flex-wrap md:flex-nowrap gap-2 text-sm text-[#808080] font-bold cursor-pointer"
    >
      Calculation based on a root <code>font-size</code> of{" "}
      {editMode ? (
        <input
          autoFocus={true}
          ref={inputRef}
          className="border w-8 text-black font-normal outline-none"
          type="text"
          value={converter.rootSize}
          onPaste={(e) => e.preventDefault()}
          onChange={(e) => handleChange(e)}
        ></input>
      ) : (
        <>
          {converter.rootSize} <BsFillPencilFill />
        </>
      )}{" "}
      pixel.
    </div>
  );
};

export default BaseSize;
