

let range = function(start, end) {
  if(start === end) {
    return [start];
  }

  let reduceRange = range(start, end-1)
  reduceRange.push(end)
  return reduceRange

}


let sumRec = function(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  return (arr[0] + sumRec(arr.slice(1)));
}

let exponent = function(base, exp) {
  if(exp === 0) {
    return 1;
  }
  if(exp > 0){
  return (base * (exponent(base, exp - 1)));
  } else {
    return 1 / exponent(base, -1 * exp);
    // return ((1 / base) * (exponent(base, exp + 1 )));
  }
}

let fibonacci = function(n) {
  if(n === 1) {
    return [1];
  }
  if(n === 2) {
    return [1,1];
  }
  let leadingFib = fibonacci(n -1);
  let lastNum = leadingFib[leadingFib.length - 1];
  let secondNum = leadingFib[leadingFib.length -2];
  leadingFib.push(lastNum + secondNum);
  return leadingFib;
}

let deepDup = function(arr) {
  let solution = arr.map( function(x) {
    if(x instanceof Array) {
     return deepDup(x);
    } else {
     return x;
    }
  })
  return solution
}