let datum = new Date()
let formatum = "%Y-%M-%d"
let langum = 'en-us'

const dateFormatter = (date, formatting, lang) => {	
	let numbers	= {
		"%Y": datum.getYear() + 1900,
		"%M": datum.getMonth() + 1,
		// This returns a string representation of the month
		// But the language code in lang will only work
		// iff you have the language installed somehow
		// Therefore this wont work on all devices and such
		"%m": date.toLocaleString(lang, { month: 'long' }),
		"%d": datum.getDay(),
	}
	return formatting.split("-").map(x => numbers[x]).join(" ")
	//let utputt = ""

	/*
	for (let thing of formatting.split("-")) {
		utputt += numbers[thing] + " "
	}
	return utputt;
	*/
}

console.log(dateFormatter(datum, "%m-%Y-%d", langum))
console.log(dateFormatter(datum, "%m-%Y-%d", "ko-KR"))
console.log(dateFormatter(datum, "%m-%Y-%d", "de-de"))
console.log(dateFormatter(datum, "%m-%Y-%d", "de"))
console.log(dateFormatter(datum, "%m-%Y-%d", "no-bok"))
console.log(dateFormatter(datum, "%m-%Y-%d", "no"))
