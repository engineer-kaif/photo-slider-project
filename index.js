const left=document.querySelector('.left');
const right=document.querySelector('.right');
const slider=document.querySelector('.slider');
const images=document.querySelectorAll('.image');

let sliderNum=1;
const length=images.length;

const nextSlide=()=>{
    slider.style.transform=`translateX(-${sliderNum*800}px)`;
    sliderNum++;
}
const PreviousSlide=()=>{
    slider.style.transform=`translateX(-${(sliderNum-2)*800}px)`;
    sliderNum--;
}
const getFirstSlide=()=>{
    slider.style.transform=`translateX(0px)`;
    sliderNum=1;
}
const getLastSlide=()=>{
    slider.style.transform=`translateX(-${(length-1)*800}px)`;
    sliderNum=length;
}
right.addEventListener('click',()=>{
    if(sliderNum<length){
        nextSlide();
    }
    else{
        getFirstSlide();
    }
})
left.addEventListener('click',()=>{
    if(sliderNum>1){
        PreviousSlide();
    }
    else{
        getLastSlide();
    }
})

