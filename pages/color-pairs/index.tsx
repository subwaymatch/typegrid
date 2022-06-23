import ColorPairsList from "components/color-pairs/ColorPairsList";
import colorPairsHex from "data/color-pairs.json";
import { NextPage } from "next";
import Color from "color";
import { TextLoop } from "react-text-loop-next";

const PairsPage: NextPage = () => {
  const colorPairs = colorPairsHex.map((o) => ({
    id: o.id,
    fontColor: Color(o.fontColor),
    bgColor: Color(o.bgColor),
  }));

  return (
    <>
      <div>
        <TextLoop
          children={[
            "Trade faster",
            "Increase sales",
            "Stock winners",
            "Price perfectly",
          ]}
        />{" "}
        and what
      </div>
      <div>Hello World</div>

      <ColorPairsList pairs={colorPairs} />
    </>
  );
};

export default PairsPage;
