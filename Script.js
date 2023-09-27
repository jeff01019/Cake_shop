const box = document.querySelectorAll('.content3');
const ingredient_btn = document.querySelectorAll('.ingrediant-btn');

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function() {
        const color1 = this.querySelector('.color1');
        const color2 = this.querySelector('.color2');

        color1.classList.toggle('hidden');
        color2.classList.toggle('hidden');
    });
}; 


for (let i = 0; i < ingredient_btn.length; i++) {
    ingredient_btn[i].addEventListener('click', function() {
        const img = document.querySelector('.ingrediant-img');

        img.classList.toggle('scaler')
    })
} 
