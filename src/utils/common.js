export default {
	/**
	 * @return {string}
	 */
	ScreenHeight(offsetBox){
		let sh = document.body.offsetHeight
		let mh = sh - offsetBox
		return mh + "px"
	},
	chartBox(offsetHeight, offsetWidth){
		let boxHeight = document.body.clientHeight -offsetHeight
		let boxWidth = document.body.clientWidth - offsetWidth
		return {
			height: boxHeight + "px",
			width: boxWidth + "px"
		}
	}
}