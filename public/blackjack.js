let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageEl=document.querySelector("#message-el");
let cardEL=document.querySelector("#card-el")
let sumEl=document.querySelector("#sum-el");
let playerdata=document.querySelector("#player-el");
document.querySelector("#newCard").hidden=true;
let player={
  name:"Duwaine",
  chips:1000
}
  playerdata.textContent=player.name+": "+"$"+player.chips;
function startGame(){
  isAlive=true;
  let firstCard=getRandomCard();
  let secondCard=getRandomCard();
  sum=secondCard+firstCard;
  cards=[firstCard,secondCard];
  renderGame();
}
function renderGame(){
    if(sum<=20){
      message="Do you want to draw a new card?";
      document.querySelector("#newCard").hidden=false;
      document.querySelector("#startGame").hidden=true;
    }
    else if(sum===21){
      message="BlackJack";
      hasBlackJack=true;
      document.querySelector("#newCard").hidden=true;
      document.querySelector("#startGame").hidden=false;
      document.querySelector("#startGame").textContent="Start A New Game?";
    }
    else{
      message="You are out of the game";
      isAlive=false;
      document.querySelector("#newCard").hidden=true;
      document.querySelector("#startGame").hidden=false;
      document.querySelector("#startGame").textContent="Start A New Game?";
    }
    messageEl.textContent=message;
    sumEl.textContent="Sum:"+" "+sum;
    cardEL.textContent="Card:";
    for(count=0;count<cards.length;count++){
      cardEL.textContent+=cards[count]+" ";
    }
}
function newCard(){
  if(!hasBlackJack&&isAlive){
    card=getRandomCard();
    sum+=+card;
    cards.push(card);
    renderGame();
  }
}
function getRandomCard(){
  let card=Math.floor(Math.random()*13)+1;
  if(card===1){
    card=11;
  }
  else if(card>10){
    card=10;
  }
  return card;
}
function showStartbtn(){
  if(isAlive==false){
    document.querySelector("#newCard").textContent="Start A New Game";
    document.querySelector("#newCard").hidden=false;
  }
  else{
    document.querySelector("#newCard").hidden=true;
  }
}
