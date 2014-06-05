var brickMaker = function() {
  var spectrum = ["red", "green", "blue", "yellow", "orange", "indigo", "violet"];
  var new_brick = document.createElement("div");
  new_brick.className = "brick";
  new_brick.style.backgroundColor = spectrum[Math.floor(Math.random()*7)];

  var wall=document.getElementById('wall');
  wall.insertBefore(new_brick, wall.childNodes[0]);
};

//basic move function courtesy of http://javascript.info/tutorial/animation
var move = function(html_element) {
  var top = 0; //this has to go here, otherwise it resets to zero every loop
  var animation = setInterval(fall, 10); // = setInterval does argument function every 10ms

  function fall() {
    //var top = 0; //this does not work here, it resets to zero otherwise
    top++;  // increase margin size
    html_element.style.marginTop = top + 'em'; // paint image
    if (top === 10)  // check finish condition
    clearInterval(animation); //breaks the interval loop
  }
};

var multiple = function() {
  brickMaker();
  move(document.getElementById('wall').childNodes[0]);
};

//I'd like to try pushing all the bricks to an array, I think that could be an interesting challenge.  I'd also like to try to figure out how to make this all be one big function with multiple nested functions and still work.  Plus get the actual 'brick-laying' to work.
