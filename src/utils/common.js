export default {
	/**
	 * @return {string}
	 */
	ScreenHeight(offsetBox){
		let sh = window.screen.height -70
		let mh = sh - offsetBox
		return mh + "px"
	},
	chartBox(offsetHeight, offsetWidth){
		let boxHeight = window.screen.height -offsetHeight -70
		let boxWidth = window.screen.width - offsetWidth -18
		return {
			height: boxHeight + "px",
			width: boxWidth + "px"
		}
	}
}