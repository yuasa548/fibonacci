'use strict';
function fib(n){
  if(0==n){
    return 0;
  }else if(1==n){
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

const length = 40;

for(let i=0; i<=length; i++){
  console.log(fib(i))
}