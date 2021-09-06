const number = document.querySelector('.counter');
const buttons = document.querySelectorAll('.btn-container button');

let counter = 0;

buttons.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        if (e.target.className === 'increase') {
            counter++;
        } else if (e.target.className === 'decrease') {
            counter--;
        } else {
            counter = 0;
        }

        if (counter > 0) {
            number.style.color = 'green';
        } else if (counter < 0) {
            number.style.color = 'red';
        } else if (counter === 0) {
            number.style.color = 'rgb(33, 39, 56)';
        }

        number.textContent = counter;
    })
})

