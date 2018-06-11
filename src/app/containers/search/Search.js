import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./Search.css";
import debounce from 'lodash/debounce'; 

class Search extends Component {
    state = {
        newTerm: ""
    }

    onSearchInputHandler = (event) => {
        let selectedTerm = event.target.value
        this.setState({
            newTerm: selectedTerm
        })
    }

    onSearchButton = () => {
        this.props.onSearch(this.state.newTerm)
        this.setState({
            newTerm: ""
        })
    }
    render() {

        return (
            <div className="searchBar col-12">
                <form className="form-inline">
                    <input onChange={this.onSearchInputHandler} value={this.state.newTerm} className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={this.onSearchButton} className="btn btn-outline my-2 my-sm-0">Search</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: debounce((newTerm) => dispatch(actions.fetchVideos(newTerm)),1000)
    }
}
export default connect(null, mapDispatchToProps)(Search);