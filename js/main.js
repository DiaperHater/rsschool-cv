"use strict";

const ghLink = document.querySelectorAll('.contacts-entry--github');
ghLink.addEventListener('click', () => {
	gtag('event', 'github', {'event_category' : 'link',});
	console.log('gh clicked');
});
