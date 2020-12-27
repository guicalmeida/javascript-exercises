const ftoc = function(F) {
  let C = (F - 32) * (5/9);
  if (C % 1 == 0) {
    return Number(C.toFixed(0));
  } else {
    return Number(C.toFixed(1));
  }
}

const ctof = function(C) {
  let F = C * (9/5) + 32;
  if (F % 1 == 0) {
    return Number(F.toFixed(0));
  } else {
    return Number(F.toFixed(1));
  }
}

module.exports = {
  ftoc,
  ctof
}
