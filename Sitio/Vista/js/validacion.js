// Definimos algunas variables para comenzar a trabajar
var star1 = document.getElementById("val-star1");
var star2 = document.getElementById("val-star2");
var star3 = document.getElementById("val-star3");
var star4 = document.getElementById("val-star4");
var star5 = document.getElementById("val-star5");
var stars = document.getElementById("vf-val");

function selectStar(star) {
    var st = document.getElementById('vf-star');
    var sts = st.getElementsByTagName('i');
    for (var i = 0; i < sts.length; i += 1) {
        sts[i].classList.remove("fa-solid");
        sts[i].classList.add("fa-regular");
    }
    for (var i = 0; i < star; i += 1) {
        sts[i].classList.remove("fa-regular");
        sts[i].classList.add("fa-solid");
    }
    stars.value = star;
};

star1.addEventListener('click', (event) => {
    selectStar(1)
});
star2.addEventListener('click', (event) => {
    selectStar(2)
});
star3.addEventListener('click', (event) => {
    selectStar(3)
});
star4.addEventListener('click', (event) => {
    selectStar(4)
});
star5.addEventListener('click', (event) => {
    selectStar(5)
});


