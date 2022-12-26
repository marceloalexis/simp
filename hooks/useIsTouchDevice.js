import { useEffect, useState } from 'react'
import isTouchDevice from '../utils/isTouchDevice'
//

export default function useIsTouchDevice() {
	const [isTouch, setIsTouch] = useState(false)
	useEffect (()=>{
		const { isAndroid, isIpad13, isIphone13, isWinPhone, isMobileSafari, isTablet } = require('react-device-detect')
		setIsTouch(isTouch || isAndroid || isIpad13 || isIphone13 || isWinPhone || isMobileSafari || isTablet || isTouchDevice ())
	}, [])

	return isTouch;
}

