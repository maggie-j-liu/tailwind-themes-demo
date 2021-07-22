import Square from "./Square";
import { random, rectsIntersect } from "../utils";
import useColorMode from "../hooks/useColorMode";

const SVGElements = ({ width, height, className }) => {
  const avgsidelen = Math.round(height / 13);
  const pad = avgsidelen / 4;
  const rectangles = [];
  const maxTries = 10;
  const { colorMode } = useColorMode();
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className}>
      {[...Array(Math.round(random(15, 25)))].map((_, idx) => {
        const sidelen = random(avgsidelen - 10, avgsidelen + 10);
        let good = false;
        let top, left, newRect;
        let tries = 0;
        while (!good && tries < maxTries) {
          tries++;
          good = true;
          top = random(0, height - sidelen);
          left = random(0, width - sidelen);
          newRect = {
            top: top - pad,
            left: left - pad,
            bottom: top + sidelen + pad,
            right: left + sidelen + pad,
          };
          for (const prev of rectangles) {
            if (rectsIntersect(newRect, prev)) {
              console.log("intersect");
              good = false;
              break;
            }
          }
        }
        console.log(top);
        rectangles.push(newRect);
        return (
          <Square
            key={idx}
            sidelen={sidelen}
            top={top}
            left={left}
            colorMode={colorMode}
            round={random(5, 10)}
          />
        );
      })}
    </svg>
  );
};

export default SVGElements;
