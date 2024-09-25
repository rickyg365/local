
function addToStorage(key, data) {
    // console.log(k + d);
    let d = JSON.stringify(data);
    localStorage.setItem(key, d);
}

function checkLocalStorage() {
    // console.log(localStorage.length)
    console.log("local storage");
    for (var i = 0; i < localStorage.length; i++) {
        let k = localStorage.key(i)
        let item = localStorage.getItem(k)
        console.log(`${k} = ${item}`)
    }
}


// Form
let form = document.getElementById('mainForm');
// console.log(form);

// Form built from object
let DATA_POINTS = [
    'key',
    'data'
]

// Build Form
for (let i=0; i < DATA_POINTS.length; i++) {
    let curr = DATA_POINTS[i];

    let new_form_input = document.createElement('input');
    new_form_input.type = 'text';
    new_form_input.name = curr;
    new_form_input.placeholder = curr;
    new_form_input.id = curr;
    
    form.appendChild(new_form_input);
}

let submit_btn = document.createElement('input');
submit_btn.type = 'submit';
submit_btn.value = 'Submit';

form.appendChild(submit_btn);

function getKeyData(key_name) {
    return document.getElementById(key_name).value
}

// Handler
form.addEventListener('submit', (e) => {
    // e.preventDefault();
    let form_data = {}
    for (let i=0; i < DATA_POINTS.length; i++) {
        let c = DATA_POINTS[i];
        let d = getKeyData(c);
        form_data[c] = d;
    }
    addToStorage("main_data", form_data || "");
    alert(`Form saved`);
});
