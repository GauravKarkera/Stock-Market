import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  searchSymbol,
  clearSearchResults,
  displayData
} from "../../redux/actions/searchAction";
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbox: "",
      searchObj: {}
    };
  }

  searchSymbol = event => {
    const { value } = event.target;
    if (!!value.length) {
      this.props.searchSymbol(value);
    } else {
      this.props.clearSearchResults();
    }
  };

  handlechange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleClickItem = obj => {
    this.setState(
      {
        searchbox: obj["2. name"]
      },
      () => {
        this.props.displayData(obj["1. symbol"]);
        this.props.clearSearchResults();
      }
    );
  };

  generateList = () =>{
    return this.props.seachResults && !!this.props.seachResults.length && (
      <ul className="list">
        {this.props.seachResults.map((obj, key) => {
          return (
            <li hey={key} onClick={() => this.handleClickItem(obj)}>
              {obj["2. name"]}
            </li>
          );
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="form-group">
            <label for="usr">Symbol Name:</label>
            <input
              type="text"
              name="searchbox"
              onChange={this.handlechange}
              value={this.state.searchbox}
              className="form-control searchbox"
              placeholder="Please Enter"
              onKeyUp={this.searchSymbol}
            />
          </div>
        </div>
        <div className="row">
          <div className="offset-md-4"></div>
          <div className="col-md-4">
            {this.props.searchbarLoading ? <div>Loading...</div> : this.generateList() }
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    seachResults: state.searchbarReducer.searchResults,
    searchbarLoading: state.searchbarReducer.searchbarLoading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchSymbol,
      clearSearchResults,
      displayData
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
