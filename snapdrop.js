// ==UserScript==
// @name         snapDrop paste
// @version      0.1
// @description  为snapDrop添加鼠标粘贴区域
// @author       kuai
// @match        https://snapdrop.net/
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	let input = document.createElement("input");
	input.value = "在此进行黏贴";
	input.addEventListener("input", () => {
		input.value = "在此进行黏贴";
	});
	document.querySelector("header").appendChild(input);
})();
