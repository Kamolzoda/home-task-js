// Task9
// function largestSwap(a) {
//   b = (a % 10) * 10;
//   b += Math.floor(a / 10);
//   if (a >= b) return true;
//   else return false;
// }
// console.log(largestSwap(14));
// console.log(largestSwap(53));
// console.log(largestSwap(99));
// Task10
// function solveForExp(a, b) {
//   let cnt = 0;
//   for (let i = b; i >= a; ) {
//     i = Math.floor(i / a);
//     cnt++;
//   }
//   return cnt;
// }
// console.log(solveForExp(4, 1024));
// console.log(solveForExp(2, 1024))
// Task8
// function longestTime(h, m, second) {
//   let hourse = h * 60 * 60;
//   let minute = m * 60;
//   if (hourse > minute && hourse > second) return h;
//   else if (minute > hourse && minute > second) return m;
//   else return second;
// }
// console.log(longestTime(15, 955, 59400));
// Task7
// function Sum(a) {
//   if (a < 0) return -a;
//   else return a;
// }
// console.log(Sum(-88));
// Task5
// function Sum(a, b) {
//   if (a == b) return true;
//   else return false;
// }
// console.log(Sum(24, 24));
// Task4
// function Sum(a, b) {
//   return a * 2 + b * 3;
// }
// console.log(Sum(7, 5));
// Task2
// function Sum(a) {
//   if (a % 5 == 0) return true;
//   else return false;
// }
// console.log(Sum(37));
// Task1
// function Sum(a,b) {
//   return a * b;
// }
// console.log(Sum(210,10));

// Task3
// function Evenly(a, b) {
//   let c = Math.floor(a / b);
//   let d = a / b;
//   if (c == d) return true;
//   else return false;
// }
// console.log(Evenly(98, 7));
