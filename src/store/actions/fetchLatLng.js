const FetchLatLng = (city) => async dispatch => {
	await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyDhLPAAJXpqa3kBViOO3jZ7_O94EoyR8lU`)
		.then(response => response.json())
			.then(city => dispatch({
				type: "FETCH_LATITUDE_LONGTITUDE",
				payload: {city: city.results[0].geometry.location}
			}))
}

export default FetchLatLng;