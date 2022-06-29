var one = document.getElementById('one');

var clear = document.getElementById('clear');

var again = document.getElementById('again');

one.textContent = localStorage.getItem('initials') + " Score: " + localStorage.getItem('score');

clear.addEventListener('click', function (){
    one.textContent = "";
    localStorage.clear();
    console.log(localStorage)
});

again.addEventListener('click', function(){
    location.href = 'index.html'
});
