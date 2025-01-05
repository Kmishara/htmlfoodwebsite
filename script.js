var tl = gsap.timeline({});

tl.from("#nav", {
  opacity: 0,
  y: -20,
  duration: 0.5,
  delay: 0.4,
})
  .from("#main #ltext", {
    x: -20,
    opacity: 0,
    duration: 0.5,
  })
  .from("#main #ltext h1", {
    x: -20,
    opacity: 0,
    duration: 0.5,
  })
  .from("#main #ltext #button", {
    x: -20,
    opacity: 0,
    duration: 0.5,
  })

  .from("#main #right #rinside", {
    opacity: 0,
    x: -180,
    rotate: "45deg",
    duration: 1,
  })
  .from("#lbottom #lbottomone", {
    opacity: 0,
    x: -20,
    duration: 0.5,
  })
  .from("#lbottom #lbottomtwo", {
    opacity: 0,
    x: -20,
    duration: 0.5,
  })
  .from("#lbottom #lbottomthree", {
    opacity: 0,
    x: -20,
    duration: 0.5,
  })
  .from("#lbottom #lbottomfour", {
    opacity: 0,
    x: -20,
    duration: 0.5,
  })
  .from("#photo #one", {
    opacity: 0,
    x: -20,
    duration: 0.5,
    delay:0.5
  })
  .from("#photo #two", {
    opacity: 0,
    x: -20,
    duration: 0.5,
    delay:0.5
  });

let count = 0; // Initial count value
const counterElement = document.getElementById("counter");
const buttonElement = document.getElementById("ltexticon");

// Add click event listener to the button
buttonElement.addEventListener("click", () => {
  count++; // Increment the count
  counterElement.textContent = count; // Update the counter display
});
