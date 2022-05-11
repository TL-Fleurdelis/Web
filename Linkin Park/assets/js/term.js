const terms = document.querySelector('.terms');
const termsContent = document.querySelector('.terms--content');
terms.addEventListener('click',function(){
    if(termsContent.style.display == 'none'){
        termsContent.style.display = 'block';
    }else{
        termsContent.style.display = 'none';
    }
}); 


