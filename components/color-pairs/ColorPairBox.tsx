import { IColorPair } from "types/color-pairs";
import ColorDisplay from "./ColorDisplay";
import styles from "./ColorPairBox.module.scss";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import clsx from "clsx";
import { Tooltip } from "@mui/material";

interface IProps {
  pair: IColorPair;
  flexBasis: number;
  isFirstInRow: boolean;
}

export default function ColorPairBox({
  pair,
  flexBasis,
  isFirstInRow,
}: IProps) {
  return (
    <div
      className={clsx(styles.pairBox, {
        [styles.firstInRow]: isFirstInRow,
      })}
      style={{ flexBasis: `${flexBasis}%` }}
    >
      <div
        className={styles.preview}
        style={{
          color: pair.fontColor.hex(),
          backgroundColor: pair.bgColor.hex(),
        }}
      >
        Brand
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
