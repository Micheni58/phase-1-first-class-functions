function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
  return function sayHi(){
    console.log ("Hello");
  }
}
function returnsAnAnonymousFunction(){
 return function (){
    console.log("Bye!")
}
}