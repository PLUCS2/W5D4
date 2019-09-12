

Array.prototype.myEach = function(func) {
  let i = 0; 
  while(i < this.length) {
    func(this[i])
    i++;
  }
}

// let babyArr = [1,2,3,4,5]
// babyArr.myEach( function(x) { console.log(x) })

Array.prototype.myMap = function(func) {
  let i = 0;
  let answer = [];
  // while (i < this.length) {
  //   answer.push(func(this[i]));
  //   i++;
  // }
  this.myEach( function(x) { 
    answer.push(func(x));
  })

  return answer
};


Array.prototype.myReduce = function(func, acc) {
  // let i = 0;
  let array = this; 

  if(!acc) {
    acc = this[0];
    // i = 1;
    array = this.slice(1);
  }


  array.myEach(function(x) {
    acc = (func(acc, x));
  });
 
  // while(i < this.length) {
  //     acc = func(acc, this[i]);
  //     i++;
  // }

  return acc;
}