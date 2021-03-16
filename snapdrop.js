// ==UserScript==
// @name         snapDrop paste
// @version      0.3
// @description  为snapDrop添加鼠标粘贴按钮
// @author       kuai
// @match        https://snapdrop.net/
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	let a = document.createElement("a");
	a.className = "icon-button";
	a.innerHTML = "粘贴";
	a.addEventListener("click", async () => {
		let files = [];
		const clipboardItems = await navigator.clipboard.read();
		for (const clipboardItem of clipboardItems) {
			for (const type of clipboardItem.types) {
				const blob = await clipboardItem.getType(type);
				files.push(new File([blob], "image.png", {type}));
			}
		}
		const peers = document.querySelectorAll("x-peer");
		if (files.length > 0 && peers.length === 1) {
			Events.fire("files-selected", {
				files: files,
				to: $$("x-peer").id,
			});
		}
	});
	document.querySelector("header").appendChild(a);

	let input = document.createElement("input");
	input.value = "在此进行粘贴";
	input.addEventListener("input", () => {
		input.value = "在此进行粘贴";
	});
	document.querySelector("header").appendChild(input);
})();
