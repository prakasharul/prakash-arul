window.onload = () => {
	'use Strict';

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('./sw.js');
	}
}