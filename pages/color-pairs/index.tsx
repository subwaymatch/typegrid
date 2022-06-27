import ColorPairsList from "components/color-pairs/ColorPairsList";
import colorPairsHex from "data/color-pairs.json";
import { NextPage } from "next";
import Color from "color";

const PairsPage: NextPage = () => {
  const colorPairs = colorPairsHex.map((o) => ({
    id: o.id,
    fontColor: Color(o.fontColor),
    bgColor: Color(o.bgColor),
  }));

  return (
    <>
      <div>Hello World</div>

      <ColorPairsList pairs={colorPairs} />
    </>
  );
};

export default PairsPage;
