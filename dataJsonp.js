function getStates(data) {
	var NewContent = '';
	 

	for (var i = 0; i < data.states.length; i++) {
		NewContent += '<div class="event">';
		NewContent += '<img src="' + data.states[i].map + ' "width=100 height=100>';
		 
		NewContent += '<h2><b>' + data.states[i].location + '</b><br>';
		NewContent += data.states[i].funFact + '</h2>';
		NewContent += '</div>';
	}
	console.log(data);
	document.getElementById('content').innerHTML = NewContent;
}