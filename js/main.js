

$('.menu-btn').click (function () {
    $('.menu-wrapper').slideToggle('normal');
 });

 let editPopup = document.querySelector('.edit-popup');
 let editPopupSwitcher = false;


$('#edit').on('click',function () {
     this.classList.remove('pulse');
     editPopupSwitcher = !editPopupSwitcher;

     if (editPopupSwitcher){
         TweenMax.to(editPopup,0.5,{x:'2%',width:'60%',height:'65vh',ease:Back.easeOut});
     } else {
         TweenMax.to(editPopup,1,{x:'-150%',width:'20%',height:'65vh',ease:Power3.easeOut});
     }
 });


$('.content-wrapper').on('click',function () {
    if (editPopupSwitcher){
        TweenMax.to(editPopup,1,{x:'-150%',width:'20%',height:'65vh',ease:Power3.easeOut});
    }
});


let preview = $('.preview-wrapper');
let themeSelects = document.querySelectorAll('.theme-select');



$('.theme-select').on('click',function () {
    for (let el of  themeSelects){
        el.classList.remove('selected-theme');
    }
    this.classList.add('selected-theme');

    if (this.id === 'indigo'){
        preview[0].classList.value = 'preview-wrapper indigo-theme';
    } else {
        preview[0].classList.value = 'preview-wrapper black-theme';
    }
});


