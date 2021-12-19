let firstName="Duwaine";
let lastName="Gray";
let greeting="Hi there";
let myPoints=3;
let errorLogger=document.getElementById("el-error");
function namer(){
  let fullName=firstName+" "+ lastName;
  console.log(fullName);
}
namer();
function greeter(){
  let fullName=firstName+lastName;
  let message= greeting +", "+fullName+"!";
  console.log(message);
}
greeter();
function add3Points(){
  myPoints+=3;
}
function removePoint(){
  myPoints-=1;
}
add3Points();
add3Points();
add3Points();
removePoint();
removePoint();
console.log(myPoints);
function purchase(){
  errorLogger.textContent="Something went wrong ,please try again";
}
