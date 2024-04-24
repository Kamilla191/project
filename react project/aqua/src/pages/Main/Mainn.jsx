import './mainn.css';

import Headerr from "../../components/header/Headerr";
import Footerr from "../../components/footer/Footerr";
import React, { useState } from "react";

export default function Mainn(){
    const [slideIndex, setSlideIndex] = useState(1);

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot"); 
  
  if (n > slides.length) {
    setSlideIndex(1);
    return;
  }

  if (n < 1) {
    setSlideIndex(slides.length);
    return;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";
  setSlideIndex(n);
}

    return(
        <>
        <Headerr />
        <main>   
        <div className="div_container_front">
          <h1 className='container_front_text'>Освежись и зарядись на аквапарке Лимпопо!</h1>
        </div>
        <div className="container_slider">
          <h1>О нас <br /><br />Большой спектр услуг</h1>
          <p>Наш аквапарк предлагает разнообразные аттракционы и горки, которые подойдут и людям всех возрастов - от малышей до взрослых.
            Вы сможете поплавать в бассейнах с волнами, спуститься с камикадзе, покататься на ленивой реке и многое другое.
            Также мы предлагаем услуги бара и кафе, где вы сможете насладиться вкусной едой, а также прохладительными напитками.</p>
          <div className='slideshow-container'>
            <div className="mySlides fade">
              <div className="numbertext">1/4</div>
              <img src="../gor.jpeg" style={{ width: "100%" }} alt="slide1" />
            </div>
            <div className="mySlides fade">
              <div className="numbertext">2/4</div>
              <img src="../lazy.jpg" style={{ width: "100%" }}  alt="slide2" />
            </div>
            <div className="mySlides fade">
              <div className="numbertext">3/4</div>
              <img src="../rainb.jpg" style={{ width: "100%" }} alt="slide3" />
            </div>
            <div className="mySlides fade">
              <div className="numbertext">4/4</div>
              <img src="../kafe.jpg" style={{ width: "100%" }} alt="slide4" />
            </div>
          </div>
          <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
          <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
          <div style={{ textAlign: "center" }}>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
            <span className="dot" onClick={() => currentSlide(4)}></span>
          </div>
        </div>
      </main>
      <Footerr />
      </>
    )
}