const FetchMarkers = (data) => dispatch => {
	if(!data.length) {
		return dispatch({
			type: 'SET_MARKERS',
			payload: { markers: {} }
		})
	}
	Promise.all(data.map(item => {
		let place = item.address.length ? `${item.city} ${item.address}` : `${item.city}`;

		return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=AIzaSyDhLPAAJXpqa3kBViOO3jZ7_O94EoyR8lU`)
			.then(res => res.json())
			.then(resultJson => resultJson.results[0].geometry.location)
	})).then((results) => {
		dispatch({
			type: 'SET_MARKERS',
			payload: { markers: results }
		})
	});
}

export default FetchMarkers;