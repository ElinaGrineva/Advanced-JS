// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

let text = document.querySelectorAll("p"); // массив параграфов


for (let item of text) {

    document.querySelector(".text1").insertAdjacentHTML('beforeend', `<p>${item.innerText.replace(/\B'|'\B/g, '"')}</p>`);

}