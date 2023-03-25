function add(a,b){
  let sum = a+b;
  return sum
}

function min(a, b){
  let ghat = a-b
  return ghat
}

function div(a, b){
  let divis = a/b
  divis = divis.toFixed(4)
  return divis
}

function mul(a,b){
  let multip = a*b;
  return multip
}


// export default add
export {add, min, div, mul}