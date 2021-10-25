// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

const closestPairOfPoints = function (points) {
  // Math.floor(calculateDistance([1, 3], [2, 2],) * 100)
  let shortest = 0;
  for (let i = 0; i < points.length - 2; i++) {
    let temp = Math.floor(calculateDistance(points[i], points[i + 1]) * 100);
    if (temp < shortest) {
      shortest = temp;
    }
  }

  return shortest;
};

console.log(
  closestPairOfPoints([
    [1, 0],
    [4, 0],
    [5, 0],
    [7, 0],
  ])
);
