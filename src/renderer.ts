const el = document.getElementById("root");
if (el) {
  el.innerText = "Hello from Electron + TypeScript renderer!";
}

console.log("renderer loaded", (window as any).electronAPI?.ping?.());
