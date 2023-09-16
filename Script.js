const box = document.querySelectorAll('.content3');

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function() {
        const color1 = this.querySelector('.color1');
        const color2 = this.querySelector('.color2');

        color1.classList.toggle('hidden');
        color2.classList.toggle('hidden');
    });
};