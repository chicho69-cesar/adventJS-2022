type Box = {
  l: number;
  w: number;
  h: number;
}

function fitsInOneBox(boxes: Box[]): boolean {
  return boxes.sort((a: Box, b: Box) => {
    return (b.l + b.w + b.h) - (a.l + a.w + a.h);
  }).slice(1).every((box: Box, i: number) => {
    return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h;
  });
}