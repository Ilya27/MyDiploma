const GetUid = (data) => {
	if(!data.length) {
		return ({
			type: "GET_UID",
			payload: { uid: []}
		})
	}
	let uid = data.map(item => item.uid)
	return ({
		type: "GET_UID",
		payload: { uid }
	})
}

export default GetUid;