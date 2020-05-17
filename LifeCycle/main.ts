import "./imported.ts";

const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (main)`);
};

// loadイベントのリスナーは非同期であり、待機します。
// unload イベントのリスナーは同期している必要があります。
window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload handler (main)`);
};

// deno-fmt-ignore
window.onunload = (e: Event): void => {
    console.log(`got ${e.type} event in onunload handler (main)`);
};
