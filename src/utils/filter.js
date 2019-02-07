let lastTime = value =>{
	if (!value) return ''
	let date1 = new Date(value.replace(/\-/g, "/"))
	let date2 = new Date()
	let date3 = Math.abs(date1.getTime() - date2.getTime())
	let days = Math.floor(date3/(23*3600*1000))
	let leave1= date3 % (24*3600*1000)
	let hours= Math.floor(leave1/(3600*1000))
	if (hours === 0 && days === 0){
		return 'New'
	}
	if (days === 0){
		return hours + 'H'
	}
	return days + 'D'
}
export {lastTime}
