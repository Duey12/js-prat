<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="/blackjack.png" type="image/x-icon">
    <title>BlackJack JS</title>
  </head>
  <body style="background-color:green">
     <x-jstoggler/>
     <div style="text-align:center;background-color:green; color:white;">
       <p id="greeting-el"></p>
       <h1 style="color:gold">BlackJack</h1>
       <p id="message-el">Want to play a round?</p>
       <p id="card-el">Cards:</p>
       <p id="sum-el"></p>
       <button type="button" id="startGame" name="button" style="color:green;background-color:gold; width:200px" onclick="startGame()">Start Game</button>
       <br>
       <button type="button" name="button" id="newCard" style="color:green;background-color:gold; width:200px; margin-top:10px" onclick="newCard()">New Card</button>
       <p id="player-el"></p>
     </div>
     <script src="blackjack.js"></script>
  </body>
</html>
