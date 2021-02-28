# Pronin Valery

* ## contacts:
  * tel: +375259875947
  * email: pownmymail@gmail.com
  * github: https://github.com/diaperhater

### **My Goal** 
Is to become professional web developer for EPAM to work and get experience from the industry leaders. My straights is: purposefulness and abilities to find solutions for submitted tasks . If i don't know something, i'll find how to know it )

* ## Skills:
	 * HTML 
  * CSS SCSS 
  * Vanilla-Js 
  * Git 
  * Gulp 
  * TDD


## My JS Code example:
```
const nextBtn = document.querySelector('.s7__next-btn');
const sliderItems = document.querySelectorAll('.s7__slider-item');
let slideOffset = 0;

nextBtn.addEventListener('click', ()=>{
	slideOffset -= 1;
	let slidesCountDisplayed = 2;
	if(window.matchMedia('(max-width: 730px)').matches){
		slidesCountDisplayed = 1;
	}
	if (Math.abs(slideOffset) > sliderItems.length - slidesCountDisplayed) {
		slideOffset = 0;
	}
	sliderItems.forEach((item)=>{
		item.style.transform = `translateX(${100 * slideOffset}%)`;
	});
});

```

* ## Work experience:
	 * Couple landing pages that i coded along with youtube videos [one of them](https://github.com/DiaperHater/visit-japan)
	 * Plus site for local pastry shop [BonBons](https://github.com/DiaperHater/bonbons) (still offline becose of design template issues)
	 * And by now my single freelance project is a site for [IGS hockey training camp](https://igspsy.ru) 

* ## Education: 
   * freecodecamp.org 
   * YouTube 
   * w3school 
   * mozilla.org.

## English: 
B1 fluent. Plus I've been working in USA for 6 months.

* ## contacts:
  * tel: +375259875947
  * email: pownmymail@gmail.com
  * github: https://github.com/diaperhater
