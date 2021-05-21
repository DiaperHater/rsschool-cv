"use strict";

const ghLink = document.querySelectorAll('.contacts-entry--github a');
ghLink.forEach(link => {
	link.addEventListener('click', () => {
		gtag('event', 'github', {'event_category' : 'link',});
		console.log('gh clicked');
	});
});
