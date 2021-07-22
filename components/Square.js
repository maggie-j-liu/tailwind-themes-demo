import { random } from "../utils";

const Square = ({ top, left, sidelen, round }) => {
  return (
    <rect
      rx={round}
      x={left}
      y={top}
      width={sidelen}
      height={sidelen}
      fill={"currentColor"}
      transform={`rotate(${random(-25, 20)}, ${left + sidelen / 2}, ${
        top + sidelen / 2
      })`}
    />
  );
};

export default Square;
