function forEach(elmArray, callbackFunction) {
	for (var i=0; i<elmArray.length; i++) {
		callbackFunction(elmArray[i]);
	}
}