import { IColorPair } from "types/color-pairs";
import ColorDisplay from "./ColorDisplay";
import styles from "./ColorPairBox.module.scss";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import clsx from "clsx";
import { Tooltip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import positiveWords from "data/positive-words";
import sampleSize from "lodash/sampleSize";

interface IProps {
  pair: IColorPair;
  flexBasis: number;
  isLastInRow: boolean;
}

const variants = {
  enter: {
    y: -20,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    y: 20,
    opacity: 0,
  },
};

export default function ColorPairBox({ pair, flexBasis, isLastInRow }: IProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [wordList, setWordList] = useState<string[]>([]);

  useEffect(() => {
    setWordList(sampleSize(positiveWords, 10));
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === wordList.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex, wordList]);

  return (
    <div
      className={clsx(styles.pairBox, {
        [styles.lastInRow]: isLastInRow,
      })}
      style={{ flexBasis: `${flexBasis}%` }}
    >
      <div
        className={styles.preview}
        // onMouseEnter={() => setIsHovering(true)}
        // onMouseLeave={() => setIsHovering(false)}
        style={{
          color: pair.fontColor.hex(),
          backgroundColor: pair.bgColor.hex(),
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <AnimatePresence>
            <motion.span
              style={{ position: "absolute" }}
              variants={variants}
              key={index}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 200 },
                opacity: { duration: 0.5 },
              }}
            >
              {wordList[index]}
            </motion.span>
          </AnimatePresence>
        </div>
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
