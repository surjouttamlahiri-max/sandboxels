// Simple mod to stretch Sandboxels UI + canvas to full browser width

runAfterLoad(() => {
  // Make the body and container use full width
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.overflow = "hidden";

  let container = document.getElementById("gameContainer");
  if (container) {
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.margin = "0";
    container.style.display = "flex";
    container.style.flexDirection = "row"; // UI + Canvas side by side
  }

  // Stretch the canvas
  let canvas = document.querySelector("canvas");
  if (canvas) {
    canvas.style.flex = "1";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
  }

  // Stretch the UI too
  let ui = document.getElementById("ui-container");
  if (ui) {
    ui.style.flex = "0 0 250px"; // adjust sidebar width as you like
    ui.style.height = "100vh";
  }
});
