const image3 = document.querySelector(".image-3");
const image4 = document.querySelector(".image-4");
const image5 = document.querySelector(".image-5");
const image6 = document.querySelector(".image-6");
const image7 = document.querySelector(".image-7");
const image8 = document.querySelector(".image-8");
const image10 = document.querySelector(".image-10");
const image13 = document.querySelector(".image-13");
const image15 = document.querySelector(".image-15");
const image16 = document.querySelector(".image-16");
const image17 = document.querySelector(".image-17");
const image18 = document.querySelector(".image-18");
const image19 = document.querySelector(".image-19");
const image20 = document.querySelector(".image-20");
const image21 = document.querySelector(".image-21");
const image22 = document.querySelector(".image-22");
const image23 = document.querySelector(".image-23");
const image24 = document.querySelector(".image-24");
const image25 = document.querySelector(".image-25");
const image26 = document.querySelector(".image-26");
//////////////////////////////////////////////////////
const modals = document.querySelector(".modals");
// //////////////////////////////////////////////////
const modal3 = document.querySelector(".modal-3");
const modal4 = document.querySelector(".modal-4");
const modal5 = document.querySelector(".modal-5");
const modal6 = document.querySelector(".modal-6");
const modal7 = document.querySelector(".modal-7");
const modal8 = document.querySelector(".modal-8");
const modal10 = document.querySelector(".modal-10");
const modal13 = document.querySelector(".modal-13");
const modal15 = document.querySelector(".modal-15");
const modal16 = document.querySelector(".modal-16");
const modal17 = document.querySelector(".modal-17");
const modal18 = document.querySelector(".modal-18");
const modal19 = document.querySelector(".modal-19");
const modal20 = document.querySelector(".modal-20");
const modal21 = document.querySelector(".modal-21");
const modal22 = document.querySelector(".modal-22");
const modal23 = document.querySelector(".modal-23");
const modal24 = document.querySelector(".modal-24");
const modal25 = document.querySelector(".modal-25");
const modal26 = document.querySelector(".modal-26");
/////////////////////////////////////////////////////
const close3btn = document.querySelector(".close-btn");
//////////////////////////////////////////////////////
const navMobileOpen = document.querySelector(".nav-mobile-open");
const navMobileClose = document.querySelector(".nav-mobile-close");
const navMobile = document.querySelector(".nav-mobile");
const navMobilelist = document.querySelector(".nav-mobile-list");
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
navMobileOpen.addEventListener("click", function () {
  navMobile.classList.toggle("nav-mobile-translate");
});
navMobileClose.addEventListener("click", function () {
  navMobile.classList.toggle("nav-mobile-translate");
});
navMobilelist.addEventListener("click", function () {
  navMobile.classList.toggle("nav-mobile-translate");
});
///////////////////////////////////////////////////
image3.addEventListener("click", function () {
  modal3.classList.toggle("show-modal");
  modals.classList.add("show-modals");
});
close3btn.addEventListener("click", function () {
  modal3.classList.remove("show-modal");
  modal4.classList.remove("show-modal");
  modal5.classList.remove("show-modal");
  modal6.classList.remove("show-modal");
  modal7.classList.remove("show-modal");
  modal8.classList.remove("show-modal");
  modal10.classList.remove("show-modal");
  modal13.classList.remove("show-modal");
  modal15.classList.remove("show-modal");
  modal16.classList.remove("show-modal");
  modal17.classList.remove("show-modal");
  modal18.classList.remove("show-modal");
  modal19.classList.remove("show-modal");
  modal20.classList.remove("show-modal");
  modal21.classList.remove("show-modal");
  modal22.classList.remove("show-modal");
  modal23.classList.remove("show-modal");
  modal24.classList.remove("show-modal");
  modal25.classList.remove("show-modal");
  modal26.classList.remove("show-modal");
});
modals.addEventListener("click", function () {
  modal3.classList.remove("show-modal");
  modals.classList.toggle("show-modals");
});
// ////////////////////////////////////////////////////modal 4
image4.addEventListener("click", function () {
  modal4.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal4.classList.remove("show-modal");
});
/////////////////////////////////////////////////modal 5
image5.addEventListener("click", function () {
  modal5.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal5.classList.remove("show-modal");
});
///////////////////////////////////////////modal 6
image6.addEventListener("click", function () {
  modal6.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal6.classList.remove("show-modal");
});
///////////////////////////////////////////modal 7
image7.addEventListener("click", function () {
  modal7.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal7.classList.remove("show-modal");
});

///////////////////////////////////////////modal 8
image8.addEventListener("click", function () {
  modal8.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal8.classList.remove("show-modal");
});

///////////////////////////////////////////modal 10
image10.addEventListener("click", function () {
  modal10.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal10.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 13
image13.addEventListener("click", function () {
  modal13.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal13.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 15
image15.addEventListener("click", function () {
  modal15.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal15.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 16
image16.addEventListener("click", function () {
  modal16.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal16.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 17
image17.addEventListener("click", function () {
  modal17.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal17.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 18
image18.addEventListener("click", function () {
  modal18.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal18.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 19
image19.addEventListener("click", function () {
  modal19.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal19.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 20
image20.addEventListener("click", function () {
  modal20.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal20.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 21
image21.addEventListener("click", function () {
  modal21.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal21.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 22
image22.addEventListener("click", function () {
  modal22.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal22.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 23
image23.addEventListener("click", function () {
  modal23.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal23.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 24
image24.addEventListener("click", function () {
  modal24.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal24.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 25
image25.addEventListener("click", function () {
  modal25.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal25.classList.remove("show-modal");
});
///////////////////////////////////////////////modal 26
image26.addEventListener("click", function () {
  modal26.classList.toggle("show-modal");
  modals.classList.toggle("show-modals");
});
modals.addEventListener("click", function () {
  modal26.classList.remove("show-modal");
});
///////////////////////////////////////////////////
