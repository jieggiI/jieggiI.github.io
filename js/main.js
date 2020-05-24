function blink_cursor() {
	let cursor = document.getElementById("cursor");
	if (cursor.style.display == "none") {
		cursor.style.display = "";
	}

	else {
		cursor.style.display = "none";
	}

}

setInterval(blink_cursor, 1000);