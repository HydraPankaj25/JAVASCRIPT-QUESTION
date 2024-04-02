towerHanoi(3); //➞ 7
towerHanoi(5); //➞ 31
towerHanoi(0); //➞ 0

function towerHanoi(int) {
  console.log(2 ** int - 1);
  return 2 ** int - 1;
}
