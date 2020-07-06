const toggler = document.querySelector(".outerToggle");
const innerToggle = document.querySelector(".innerToggle");
const card1 = document.getElementById("card1Text");
const card2 = document.getElementById("card2Text");
let state = "monthly";

toggler.addEventListener("click", () => {
  if (state == "monthly") {
    document.querySelector(".innerToggle").style.left = "65%";

    card1.textContent = "$228";
    card2.textContent = "$1188";
    state = "annually";
  } else {
    document.querySelector(".innerToggle").style.left = "6%";
    card1.textContent = "$19";
    card2.textContent = "$99";
    console.log(state);
    state = "monthly";
  }
});
