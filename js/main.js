"use strict";

const ghLink = document.querySelectorAll('.contacts-entry--github a');
ghLink.forEach(link => {
	link.addEventListener('click', () => {
		gtag('event', 'link', {'event_category' : 'github',});
		console.log('gh clicked');
	});
});
