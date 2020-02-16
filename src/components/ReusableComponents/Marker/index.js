import React from 'react';
import { Marker } from 'react-google-maps';

const CustomMarker = props => {
	const onMarkerClick = (event) => {
		props.history.push(`/walker/${props.link}`)
	}
	return (
		<Marker
			onClick={onMarkerClick}
			{...props}
		/>
	)
}

export default CustomMarker;