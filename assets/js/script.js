let display = document.getElementById('display');
let btn = document.getElementsByClassName('btn');

for (object of btn) {
    object.addEventListener('click', function(e) {
        let btnValue = e.target.textContent;
        display.value += btnValue;
    })
}