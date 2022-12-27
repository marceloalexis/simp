import { useState, useEffect } from 'react';

const isTouchDevice = () => {
const [touchDevice, setTouchDevice] = useState(false);

useEffect(() => {

if (typeof window === 'undefined') return;
	const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	function mq(query) {
	  return typeof window !== 'undefined' && window.matchMedia(query).matches;
	}
	if ('ontouchstart' in window || (window?.DocumentTouch && document instanceof DocumentTouch)) {
	  setTouchDevice(true);
	  return;
	}
	const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
	if (mq(query)) setTouchDevice(true);
}, []);

return touchDevice;
};

export default isTouchDevice;