let score1 = 80;
let score2 = 75;
let score3 = 85;

let totalScore = score1 + score2 + score3;
if (totalScore > 250 && totalScore <= 300) {
  console.log("A+");
} else if (totalScore > 220 && totalScore <= 250) {
  console.log("B");
} else if (totalScore > 180 && totalScore <= 220) {
  console.log("C");
} else if (totalScore > 150 && totalScore <= 180) {
  console.log("D");
} else if (totalScore > 0 && totalScore <= 150) {
  console.log("Too Low");
} else {
  console.log("Invalid Score");
}
