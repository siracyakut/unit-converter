const About = () => {
  return (
    <div className="w-1/2 md:w-1/3 flex flex-col gap-3.5 mb-3">
      <h3 className="text-[1.4rem] text-center">Convert pixels to REM</h3>
      <p>
        This calculator converts pixels to the CSS unit REM. The conversion is
        based on the default <code>font-size</code> of 16 pixel, but can be
        changed.
      </p>
      <p>
        With the CSS <code>rem</code> unit you can define a size relative to the{" "}
        <code>font-size</code> of the HTML root tag.
      </p>
      <p>
        The conversion works of course in both directions, just change the
        opposite input field.
      </p>
      <h3 className="text-[1.17em]">An example</h3>
      <p>
        So if we take the default size as an example, than <code>1px</code>{" "}
        represents <code>0.0625rem</code> and, in the other direction,{" "}
        <code>1rem</code> represents <code>16px</code>.
      </p>
      <h3 className="text-[1.17em]">EM vs. REM: The differences</h3>
      <p>
        Inside a single document, the length of a REM unit is everywhere the
        same, it can just differ between documents. EM on the other side can
        differ between every element, because it is relative to the elements own{" "}
        <code>font-size</code> (exception is the <code>font-size</code> itself,
        in it EM is relative to the parent).
      </p>
      <p>REM is the newer unit, older browsers don't support it.</p>
    </div>
  );
};

export default About;
