function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function named(){
    console.log("yeah")
  }
}

function returnsAnAnonymousFunction(){
  return () => {console.log("whatever")}
}
