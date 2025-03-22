// ==UserScript==
// @name         Syncshare Triggerrer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a button which triggers solving exam1
// @author       Your Name
// @match        https://exam1.urfu.ru/mod/quiz/attempt*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Check if the button already exists
    if (document.getElementById('custom-floating-button')) return;

    // Create button element
    const button = document.createElement('button');
    button.id = 'custom-floating-button';
    button.textContent = 'solve';
    button.style.position = 'fixed';
    button.style.top = '0';
    button.style.left = '0';
    button.style.zIndex = '9999';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '0 0 5px 0';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';

    // Add click event
    button.addEventListener('click', () => {
            let icons = [...document.querySelectorAll("p>.subquestion>span"), ...document.querySelectorAll(".control"), ...document.querySelectorAll("fieldset>.answer>div>span"),...document.querySelectorAll("fieldset>div.answer>span")]
            let store = document.querySelector("body>#yui3-css-stamp+div").shadowRoot
            let submenus = store.querySelectorAll(".syncshare-cm")
            icons.forEach((icon, icon_index) => {
                icon.click()
                let answers = submenus[icon_index].children[1].children[3]
                answers.style.display = "flex"
                let max_ans_num = 0
                answers.children.forEach((answer, answer_index) => {
                    let voted = Number(answer.querySelector(".postfix>span").innerText)
                    max_ans_num = Math.max(max_ans_num, voted)
                })
                answers.children.forEach((answer, answer_index) => {
                    let voted = Number(answer.querySelector(".postfix>span").innerText)
                    if (max_ans_num == voted) {
                        answer.click()
                    }

                setTimeout(()=>{document.querySelector("#mod_quiz-next-nav").click()}, 1000);
            })})})

    // Append to body
    document.body.appendChild(button);
})();