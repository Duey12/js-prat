<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <x-jstoggler/>
    <h1>People Entered</h1>
    <h2 id="count-el">0</h2>
    <button type="button" name="button" id="increment-btn" onclick="increment_counter()">INCREMENT</button>
    <br>
    <button type="button" name="save" id="save-btn" style="margin-top:10px;" onclick="save()">Save</button>
    <p id="save-el">Previous Entries:</p>
    <script src="index.js"></script>
  </body>
</html>
