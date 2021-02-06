"use strict";

class Slide{
    #src;
    #description;
    constructor(src,description){
        this.#src = src;
        this.#description=description;
    }

    get src(){
        return this.#src;
    }

    get description(){
        return this.#description;
    }
}

class Slider{
    #slides;
    #currentIndex;
    constructor(slides,currentIndex =0){
        this.#slides=slides;
        this.#currentIndex = currentIndex;
    }

    get slides(){
        return this.#slides;
    }

    get currentIndex(){
        return this.#currentIndex;
    }

    set currentIndex(value){
        if(value>=this.#slides.length || value<0 || !Number.isSafeInteger(value)){
           throw new RangeError("Index out of boundary of collection");
        }
        if(isNaN(value)){
            throw new TypeError("NaN");
        }
        this.#currentIndex=value;
    }
    

    get currentSlide(){
        return this.#slides[this.#currentIndex];
    }

    get nextSlide(){
        return this.#slides[this.nextIndex];
    }

    get prevSlide(){
        return this.#slides[this.prevIndex];
    }

    get nextIndex(){
        return (this.#currentIndex+1)%this.#slides.length;
    }

    get prevIndex(){
        return (this.#currentIndex-1+this.#slides.length)%this.#slides.length;
    }
}

const slides = [
    new Slide("assets/pic/images.jpeg","Cat_1"),
    new Slide("assets/pic/Thinking-of-getting-a-cat.png","Cat_2"),
    new Slide("assets/pic/cat_3.jpeg","Cat_2"),
];

const slider = new Slider(slides);

const [buttonNext,buttonPrev] = document.getElementsByClassName("btn");

const sliderClick = (direction="next")=>(
    e=>{
        slider.currentIndex=slider[direction=="next"?"nextIndex":"prevIndex"];
        const oldCurrentImg =document.querySelector(".currentImage");
        const newCurrentImage = document.querySelector(".newImage");
        const currentSlide = slides.currentSlide;
        const nextSlide = slides[direction=="next"? "nextSlide":"prevSlide"];
        newCurrentImage.classList.replace("nextImage","currentImage");
        oldCurrentImg.classList.replace("currentImage","nextImage");
        newCurrentImage.setAttribute("src",currentSlide.src);
    });

buttonPrev.addEventListener("click",sliderClick("prev"));
buttonNext.addEventListener("click",sliderClick("next"));



