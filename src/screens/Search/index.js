import React, { Component } from 'react';
import classes from './Search.module.css';
import WalkersComponent from '../../components/WalkersComponent';
import SearchSittersForm from './SearchSittersForm/SearchSittersForm'
import Map from '../../components/Map';

import { withFirebase } from '../../config/Firebase';
import { compose } from 'recompose';
import { connect }   from 'react-redux';
import FetchLatLng from '../../store/actions/fetchLatLng';
import FetchMarkers from '../../store/actions/fetchMarkers';
import GetUid from '../../store/actions/getUid';

class SearchBase extends Component {
	state = {
		loading: true,
		walkers: null
	}

	componentDidMount() {
		this.onClickSearch()
	}

	componentWillUnmount() {
		this.props.firebase.users().off();
	}

	filter = (array, filters) => {
		const filterKeys = Object.keys(filters)
		return array.filter(item => {
			return filterKeys.every(key => {
				if(!filters[key].length) return true
				if(key === 'regularity' || key === 'startDate' || key === 'endDate') return true
				if(key === 'dogSizes' || key === 'daysOfTheWeek') {
					return filters[key].every(property => item[key].indexOf(property) !== -1)
				}
				if(key === 'salary') {
					if (item[key] > filters[key][0] && item[key] < filters[key][1]) {
						return true
					} else {
						return false
					}
				}
				if(key === 'services') {
					return item[key].indexOf(filters[key]) === -1 ? false : true
				} else {
					return item[key] === filters[key] ? true : false
				}
			})
		})
	}

	onClickSearch = () => {
		let city = this.props.search.city.length ? this.props.search.city : 'Kiev';
		const { FetchLatLng, FetchMarkers, GetUid } = this.props;
		FetchLatLng(city)

		this.setState({loading: false})

		this.props.firebase.users()
			.orderByChild('city')
			.equalTo(this.props.search.city)
			.on('value', snapshot => {
			const walkersObject = snapshot.val()

			if(walkersObject) {
				const walkersList = Object.keys(walkersObject).map(key => ({
					...walkersObject[key],
					uid: key
				}))
				let filtered = this.filter(walkersList, this.props.search)
				FetchMarkers(filtered)
				GetUid(filtered)
				this.setState({
					loading: true,
					walkers: filtered.length ? filtered : null
				})
			} else {
				this.setState({
					walkers: null,
					loading: true
				})
			}
		})
	}

	render() {
		const { walkers, loading } = this.state;
		return (
			<div className={classes["search-wrapper"]}>

				<SearchSittersForm onClickSearch={this.onClickSearch.bind(this)} history={this.props.history}/>

				{!loading
					? (
						<div className={classes.loading}>
					<img alt="loading" src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif"/>
				</div>
					)
					: (
						<div className={classes["search-wrapper"]}>
							<WalkersComponent walkers={walkers}/>
							<Map
								defaultCenter={this.props.city}
								markers={this.props.markers}
								history={this.props.history}
								markersUid={this.props.markersUid}
								googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhLPAAJXpqa3kBViOO3jZ7_O94EoyR8lU&v=3.exp&libraries=geometry,drawing,places"
								loadingElement={<div style={{ height: `100%` }} />}
								containerElement={<div style={{ width: `calc(100vw - 700px)`, zIndex: 0 }} />}
								mapElement={<div style={{ height: `100%` }} />}
							/>
						</div>
					)
				}
			</div>
		)
	}
}


const Search = compose(
	withFirebase,
	connect(state => ({search: state.searchParam, city: state.city, markers: state.markers, markersUid: state.markersUid}), { FetchLatLng, FetchMarkers, GetUid })
)(SearchBase)

export default Search;
