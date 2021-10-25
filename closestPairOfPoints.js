// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  const sqrt = Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
  return Math.round(sqrt * 100);
}

const closestPairOfPoints = function (points) {
  // Math.floor(calculateDistance([1, 3], [2, 2],) * 100)
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let temp = calculateDistance(points[i], points[j]);
      min = Math.min(min, temp);
    }
  }
  return min;
};

console.log(
  closestPairOfPoints([
    [1, 0],
    [4, 0],
    [5, 0],
    [7, 0],
  ])
);
