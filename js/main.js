"use strict";

const ghLink = document.querySelectorAll('.contacts-entry--github a');
ghLink.forEach(link => {
	link.addEventListener('click', () => {
		gtag('event', 'link', {'event_category' : 'github',});
		console.log('gh clicked');
	});
});

const mailLink = document.querySelectorAll('.contacts-entry--mail a');
mailLink.forEach(link => {
	link.addEventListener('click', () => {
		gtag('event', 'link', {'event_category' : 'email',});
		console.log('mail clicked')
	});
});