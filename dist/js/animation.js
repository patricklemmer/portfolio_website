// Slick animation of meerkat svg on /home //

// $(document).ready(function () {
//   $('.meerkat_animation').slick({
//     settingname: setting - value
//   });
// });

window.onload = changeImage;

function changeImage() {
    const time = new Date().getHours();

    if (time < 6) {
        document.getElementById("img").src = "./img/meerkat_five.svg";
    } else if (time < 9) {
        document.getElementById("img").src = "./img/meerkat_one.svg";
    } else if (time < 14) {
        document.getElementById("img").src = "./img/meerkat_two.svg";
    } else if (time < 17) {
        document.getElementById("img").src = "./img/meerkat_three.svg";
    } else if (time < 20) {
        document.getElementById("img").src = "./img/meerkat_four.svg";
    } else if (time < 24) {
        document.getElementById("img").src = "./img/meerkat_five.svg";
    }
}