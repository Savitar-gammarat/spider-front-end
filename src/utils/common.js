export default {
	/**
	 * @return {string}
	 */
	ScreenHeight(offsetBox){
		let sh = document.body.offsetHeight
		let mh = sh - offsetBox
		return mh + "px"
	}
}