
Array.prototype.uniq = function() {
  let i = 0;
  let solArr = [];
  while (i < this.length) {
    if (!solArr.includes(this[i])) {
      solArr.push(this[i]);
    }
    i++;
  }
  return solArr;
};

// Array.prototype.uniq = uniq

// function Array(func) {
//   this.uniq = func;
// }

// const unique = new Array(uniqueness);

Array.prototype.twoSum = function() {
  let i = 0;
  let answer = [];
  while(i < (this.length - 1)) {
    let y = (i + 1);
    while(y < this.length) {
      if((this[i] + this[y]) === 0) {
        answer.push([i, y])
      }
      y++;
    }
    i++;
  }
  return answer;
}

Array.prototype.transpose = function() {
  let i = 0;
  let answer = [];
  while(i < this.length) {
    let y = 0; 
    let subAns = [];
    while(y < this.length) {
      subAns.push(this[y][i])
      y++;
    }
    answer.push(subAns)
    i++;
  }
  return answer;
}

