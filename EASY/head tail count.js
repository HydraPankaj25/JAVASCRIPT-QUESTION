function headTailCount() {
  let head = [];
  let tail = [];
  for (i = 1; i <= 100; i++) {
    let res = Math.round(Math.random());
    if (res == 0) {
      tail.push(res);
    } else {
      head.push(res);
    }
  }
  console.log(`Head Count:- ${head.length} And Tails Count:- ${tail.length}`);
}

headTailCount();
