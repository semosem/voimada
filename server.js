const theArr = [
  { x: -1, y: -2 },
  { x: 1, y: 2 },
  { x: 2, y: 4 },
  { x: -3, y: 2 },
  { x: 2, y: -2 }
];

const slopes = theArr.map((coor, index) => ({
  index: index
}));

function separageQuads(anArray) {
  let count = 0;
  let slopes = [];
  anArray.map(coor => {
    if (coor.x > 0 && coor.y > 0) {
      let y = 0 - coor.y;
      let x = 0 - coor.x;
      if (slopes.indexOf(y / x) === -1) {
        slopes.push(y / x);
        count++;
      }
    } else if (coor.x < 0 && coor.y > 0) {
      let y = 0 - coor.y;
      let x = 0 - coor.x;
      if (slopes.indexOf(y / x) === -1) {
        slopes.push(y / x);
        count++;
      }
    } else if (coor.x < 0 && coor.y < 0) {
      let y = 0 - coor.y;
      let x = 0 - coor.x;
      if (slopes.indexOf(y / x) === -1) {
        slopes.push(-y / x);
        count++;
      }
    } else {
      let y = 0 - coor.y;
      let x = 0 - coor.x;
      if (slopes.indexOf(y / x) === -1) {
        slopes.push(-y / x);
        count++;
      }
    }
  });
  console.log(count);
}

separageQuads(theArr);
