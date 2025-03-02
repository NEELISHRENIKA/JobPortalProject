let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll=() =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
        if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };
});


document.querySelector('input[name="submit"]').onclick = function(event) {
    event.preventDefault(); 
    window.location.href = 'home.html'; 
};

document.getElementById('register-btn').onclick = function(event) {
    event.preventDefault();
    alert("Registered successfully!");
};
