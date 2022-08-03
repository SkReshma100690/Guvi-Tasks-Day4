// Shaik Reshma (B38)
// Day-4 Task-1

var obj1 = {name: "Person 1", age: 5};
var obj2 = {age: 5, name: "Person 1"};
let flagEq = 1;
for (let i in obj1){
  if (obj1[i]===obj2[i]){
    continue
  }else{
    flagEq = 0;
    break}
}

if(flagEq==1){
  console.log("The two JSON have the same properties");
}else{
  console.log("The two JSON do NOT have the same properties")
}