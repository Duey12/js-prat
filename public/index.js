let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
count=0;
function increment_counter(){
  count++;
  countEl.textContent=count;
  }
function save(){
  console.log(count);
  previous=saveEl.textContent+count;
  saveEl.textContent=previous+"  - ";
  count=0;
  countEl.textContent=count;
}


















// let welcomeEl=document.getElementById("welcome-el");
// let name="Duwaine Gray ";
// let greeting="Welcome Back , ";
// let message= greeting +name;
// welcomeEl.textContent=message;
// welcomeEl.textContent+=" 👋🏿";
