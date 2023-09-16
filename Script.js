let box = document.getElementById('Fuchsia');
let box2 = document.getElementById('Flamingo');
let color1 = document.getElementById('Fuchsia_1');
let color2 = document.getElementById('Fuchsia_2');

box.addEventListener('click', function () {
    color2.style.zIndex = 2;
    color1.style.opacity = 0;
    
});

function ChangeOppacity () {
    console.log(box.firstChild);
}