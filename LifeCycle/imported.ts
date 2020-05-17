const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (imported)`);
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload handler (imported)`);
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload handler (imported)`);
};

console.log("log from imported script");
