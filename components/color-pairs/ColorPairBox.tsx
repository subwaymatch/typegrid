import { IColorPair } from "types/color-pairs";
import ColorDisplay from "./ColorDisplay";
import styles from "./ColorPairBox.module.scss";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import clsx from "clsx";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import positiveWords from "data/positive-words";
import sampleSize from "lodash/sampleSize";

interface IProps {
  pair: IColorPair;
  flexBasis: number;
  isLastInRow: boolean;
}

export default function ColorPairBox({ pair, flexBasis, isLastInRow }: IProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div
      className={clsx(styles.pairBox, {
        [styles.lastInRow]: isLastInRow,
      })}
      style={{ flexBasis: `${flexBasis}%` }}
    >
      <div
        className={styles.preview}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          color: pair.fontColor.hex(),
          backgroundColor: pair.bgColor.hex(),
        }}
      >
        <p>{isHovering ? "Hovering" : "Text"}</p>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.colorDisplaysWrapper}>
          <ColorDisplay color={pair.fontColor} />
          <ColorDisplay color={pair.bgColor} />
        </div>

        <div className={styles.controls}>
          <Link href="/">
            <a className={styles.controlButton}>
              <AutoFixHighIcon className={styles.previewIcon} />
            </a>
          </Link>
          <Tooltip
            title={
              <div>
                <h2>Tooltip</h2>
                <p>Goes here</p>
              </div>
            }
            arrow
          >
            <a className={styles.controlButton}>
              <InfoOutlinedIcon className={styles.previewIcon} />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
