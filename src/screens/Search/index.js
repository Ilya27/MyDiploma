import React, { Component } from "react";
import classes from "./Search.module.css";
import WalkersComponent from "../../components/WalkersComponent";
import SearchSittersForm from "./SearchSittersForm/SearchSittersForm";
import Map from "../../components/Map";
class Search extends Component {
  state = {
    loading: true,
    walkers: null
  };

  componentDidMount() {
    this.onClickSearch();
  }

  filter = (array, filters) => {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true;
        if (key === "regularity" || key === "startDate" || key === "endDate")
          return true;
        if (key === "dogSizes" || key === "daysOfTheWeek") {
          return filters[key].every(
            property => item[key].indexOf(property) !== -1
          );
        }
        if (key === "salary") {
          if (item[key] > filters[key][0] && item[key] < filters[key][1]) {
            return true;
          } else {
            return false;
          }
        }
        if (key === "services") {
          return item[key].indexOf(filters[key]) === -1 ? false : true;
        } else {
          return item[key] === filters[key] ? true : false;
        }
      });
    });
  };

  onClickSearch = () => {};

  render() {
    const { walkers, loading } = this.state;
    return (
      <div className={classes["search-wrapper"]}>
        <SearchSittersForm
          onClickSearch={this.onClickSearch.bind(this)}
          history={this.props.history}
        />

        {!loading ? (
          <div className={classes.loading}>
            <img
              alt="loading"
              src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif"
            />
          </div>
        ) : (
          <div className={classes["search-wrapper"]}>
            <WalkersComponent walkers={walkers} />
            {/*//TODO return Map  */}
            {/* <Map
              defaultCenter={this.props.city}
              markers={this.props.markers}
              history={this.props.history}
              markersUid={this.props.markersUid}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhLPAAJXpqa3kBViOO3jZ7_O94EoyR8lU&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ width: `calc(100vw - 700px)`, zIndex: 0 }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
            /> */}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
