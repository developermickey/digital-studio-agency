gsap.registerPlugin(ScrollTrigger);
let heading = document.querySelectorAll("#page1 .head2");

function textSplitteing() {
  heading.forEach((elem) => {
    let clutter = "";
    let h1Text = elem.textContent;
    let splitedText = h1Text.split("");
    splitedText.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
}

function gsapAnimation() {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

  tl.to("#page1 .head2 span", {
    marginLeft: 10,
    stagger: 0.1,
    opacity: 1,
  });
}

textSplitteing();
gsapAnimation();

document.addEventListener("DOMContentLoaded", function () {
  const innerCursor = document.querySelector(".circle-cursor-inner");
  const outerCursor = document.querySelector(".circle-cursor-outer");

  // Update custom cursor positions based on mouse movement
  document.addEventListener("mousemove", function (e) {
    innerCursor.style.left = e.pageX - innerCursor.offsetWidth / 2 + "px"; // Center horizontally
    innerCursor.style.top = e.pageY - innerCursor.offsetHeight / 2 + "px"; // Center vertically
    outerCursor.style.left = e.pageX - outerCursor.offsetWidth / 2 + "px"; // Center horizontally
    outerCursor.style.top = e.pageY - outerCursor.offsetHeight / 2 + "px"; // Center vertically
  });

  // Hide default cursor when over the document
  document.body.style.cursor = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const circleCursor = document.querySelector(".circle-cursor");

  // Update custom cursor position based on mouse movement
  document.addEventListener("mousemove", function (e) {
    circleCursor.style.left = e.pageX + "px";
    circleCursor.style.top = e.pageY + "px";
  });

  // Hide default cursor when over the document
  document.body.style.cursor = "none";
});
