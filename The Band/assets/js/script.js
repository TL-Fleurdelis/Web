const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal =document.querySelector('.modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose =document.querySelector('.modal-close')
function showBuyTicket() {
    modal.classList.add('open');
}
function hideBuyTicket() {
    modal.classList.remove('open');
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTicket)
}
modalClose.addEventListener('click',hideBuyTicket)
modal.addEventListener('click',hideBuyTicket)
modalContainer.addEventListener('click',function (event){
    event.stopPropagation()
})
