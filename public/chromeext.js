let inputBtn=document.getElementById(('input-btn'));
let myLeads=[];
let inputEl=document.querySelector("#input-el");
let ulel=document.querySelector("#ul-el");
inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value);
  inputEl.value="";
  renderLeads();
});
function renderLeads(){
  let listItems="";
  for(count=0;count<myLeads.length;count++){
    listItems+=
    `<li>
      <a target=blank href=http://${myLeads[count]}>${myLeads[count]}
      </a>
    </li>`
  }
  ulel.innerHTML=listItems;
}
