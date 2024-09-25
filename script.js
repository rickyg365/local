let item = document.getElementById("test-block");
console.log(item);

let item2 = document.getElementsByClassName('test-box');
console.log(item2);


let tabs = document.getElementsByClassName('tab-group');
console.log(tabs)

let active_tab = 0;

for (let i=0; i < tabs.length; i++) {
    let current_tab = tabs[i]
    if (i === active_tab) {
        current_tab.classList.toggle('visible')
    }
}


