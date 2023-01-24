function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => {
    return (b.l + b.w + b.h) - (a.l + a.w + a.h)
  }).slice(1).every((box, i) => {
    return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
  })
}

function fitsInOneBoxAlt1(boxes) {
  return boxes
    .sort((a, b) => b.l - a.l)
    .every((item, index) => !boxes[index + 1] ? true : item.l > boxes[index + 1].l && item.w > boxes[index + 1].w && item.h > boxes[index + 1].h)
}

module.exports = fitsInOneBox