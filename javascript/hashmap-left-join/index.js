function leftJoin(map1, map2) {
  let result = [];

  for (let [key, value1] of map1) {
    let row = [key, value1];

    if (map2.has(key)) {
      row.push(map2.get(key));
    } else {
      row.push(null);
    }

    result.push(row);
  }

  return result;
}

module.exports = leftJoin;
