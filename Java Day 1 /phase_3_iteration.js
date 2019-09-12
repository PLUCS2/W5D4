Array.prototype.bubbleSort = function() {
  let sorted = true;
  // let answer = this 
  while(sorted) {
    sorted = false;
    let i = 0;
    while(i  < (this.length - 1)) {
      if(this[i] > this[i + 1]) {
        [this[i], this[i +1]] = [this[i + 1], this[i]];
        // let placeHolder = this[i]; 
        // this[i] = this[i+1]; 
        // this[i+1] = placeHolder;
        sorted =true;
      }
      i++;
    }
  }
return this;
}


String.prototype.substrings = function() { 
  let answer = [];
  let i = 0;
  while(i < (this.length)) {
    let x = (i + 1); 
    while(x < (this.length + 1)) {
      answer.push(this.slice(i, x));
      x++;
    }
    i++;
  }
  return answer;
}
