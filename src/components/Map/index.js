import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CustomMarker from '../ReusableComponents/Marker';

const Map = withScriptjs(withGoogleMap(props => {
	let markers = props.markers.length ? 
		props.markers.map(( item, index ) => {
			return (
			<CustomMarker
				history={props.history}
				link={props.markersUid[index]}
				key={index}
				position={item}
				label={`${++index}`}
			/>
		)}) : null
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={props.defaultCenter}>
				{markers}
		</GoogleMap>
	)
}))

export default Map;