import Color from "color";
import styles from "./ColorDisplay.module.scss";

interface IProps {
  color: Color;
}

export default function ColorDisplay({ color }: IProps) {
  return (
    <div className={styles.colorDisplay}>
      <div className={styles.pill} style={{ background: color.hex() }} />

      <div className={styles.hexString}>
        {color.hex().substring(1).toLowerCase()}
      </div>
    </div>
  );
}
