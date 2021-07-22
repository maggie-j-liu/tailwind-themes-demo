const rectsIntersect = (rect1, rect2) => {
  if (rect1.bottom < rect2.top || rect2.bottom < rect1.top) {
    return false;
  }
  if (rect1.right < rect2.left || rect2.right < rect1.left) {
    return false;
  }
  return true;
};
export default rectsIntersect;
