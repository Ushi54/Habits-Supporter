//front-end create-app
const idea = document.getElementById("idea");
const procedure = document.getElementById("procedure");
const hintCard1 = document.getElementById("hint-card1");
const hintCard2 = document.getElementById("hint-card2");
const hintCard3 = document.getElementById("hint-card3");
const hintCard4 = document.getElementById("hint-card4");
const hintCard5 = document.getElementById("hint-card5");
idea.addEventListener("mouseover",function(event){
  hintCard1.classList.add("hint-card-display")
  hintCard2.classList.add("hint-card-display")
  hintCard3.classList.add("hint-card-display")
  hintCard4.classList.add("hint-card-display")
});
idea.addEventListener("mouseout",function(event){
  hintCard1.classList.remove("hint-card-display")
  hintCard2.classList.remove("hint-card-display")
  hintCard3.classList.remove("hint-card-display")
  hintCard4.classList.remove("hint-card-display")
});

procedure.addEventListener("mouseover",function(event){
  hintCard5.classList.add("hint-card-display")
});
procedure.addEventListener("mouseout",function(event){
  hintCard5.classList.remove("hint-card-display")
});