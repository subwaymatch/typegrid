import { IColorPair } from "types/color-pairs";
import styles from "./ColorPairsList.module.scss";
import { useMeasure } from "react-use";
import { useEffect, useState } from "react";
import ColorPairBox from "./ColorPairBox";

interface IProps {
  pairs: IColorPair[];
}

export default function ColorPairsList({ pairs }: IProps) {
  const [ref, { width: pairsContainerWidth }] = useMeasure<HTMLDivElement>();
  const [flexBasis, setFlexBasis] = useState(50);
  const pairBoxWidth = 320;
  const numBoxesPerRow = Math.floor(pairsContainerWidth / pairBoxWidth);

  useEffect(() => {
    const calculateFlexBasis = (containerWidth: number) => {
      const newBasis = 100 / numBoxesPerRow;
      setFlexBasis(newBasis);

      return containerWidth;
    };

    calculateFlexBasis(pairsContainerWidth);
  }, [pairsContainerWidth, numBoxesPerRow]);

  return (
    <div ref={ref} className={styles.colorPairsContainer}>
      {pairs.map((pair, index) => (
        <ColorPairBox
          key={pair.fontColor.hex() + pair.bgColor.hex()}
          pair={pair}
          flexBasis={flexBasis}
          isLastInRow={index % numBoxesPerRow === numBoxesPerRow - 1}
        />
      ))}
    </div>
  );
}
