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

let fixlink = value =>{
	let length = value.length
	if (length > 70){
		return value.substring(0,70) + "..."
	}else {
		return value
	}
}
export {fixlink}

let classifySite = (id, siteList) =>{
	let name = null
	siteList.forEach(value=>{
		if (value.id === id){
			name = value.name.toString()
		}
	})
	return name
}
export {classifySite}

let classifySiteImage = (id, siteList) =>{
	let logo = null
	siteList.forEach(value=>{
		if (value.id === id){
			logo = value.logo.toString()
		}
	})
	return logo
}
export {classifySiteImage}

let dateformat = date =>{
	let d = new Date(date);
	let year = d.getFullYear();
	let month = d.getMonth() + 1;
	let day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
	let hour = d.getHours();
	let minutes = d.getMinutes();
	let seconds = d.getSeconds();
	return year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
}
export  {dateformat}
