// Fungsi untuk validasi form
function validateForm() {
  let namaKamu = document.forms["message-form"]["nama"].value;
  let namaHilal = document.forms["message-form"]["nama"].value;
  let tanggalLahir = document.forms["message-form"]["birth-date"].value;
  let gender = document.forms["message-form"]["gender"].value;
  let messages = document.forms["message-form"]["messages"].value;

  if (namaKamu == "" || namaHilal == "" || tanggalLahir == "" || gender == "" || messages == "") {
      alert("Tolong isi identitas anda");
      return false;
  }
  let currentTime = new Date();
  let formattedTime = currentTime.toUTCString();
  document.getElementById("sender-full-name").innerHTML = namaKamu;
  document.getElementById("sender-birth-date").innerHTML = tanggalLahir;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
  document.getElementById("current-time").innerHTML = formattedTime;
  return false;
}

// Fungsi untuk slideshow pada Hero section
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";
}
var slides = document.getElementsByClassName("kata-kata");
    var currentSlideIndex = 0;

    function showNextSlide() {
        slides[currentSlideIndex].style.display = "none";
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].style.display = "block";
    }


    setInterval(showNextSlide, 3000);