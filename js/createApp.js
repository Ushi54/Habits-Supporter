//front-end create-app
const idea = document.getElementById("idea");
const hintCard1 = document.getElementById("hint-card1");
const hintCard2 = document.getElementById("hint-card2");
const hintCard3 = document.getElementById("hint-card3");
const hintCard4 = document.getElementById("hint-card4");
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