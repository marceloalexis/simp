const isTouchDevice = () => {
	if(typeof window === 'undefined') return false
	const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
	function mq(query) {
		return typeof window !== 'undefined' && window.matchMedia(query).matches
	}
	// @its-ignore
	if('ontouchstart' in window || (window?.DocumentTouch && document instanceof DocumentTouch)) return true
		const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('') //include the 'heartz' - https://git.io/vznFH
	return mq(query)
}
export default isTouchDevice;