import React, { Component } from "react";
import { connect } from "react-redux";

export class Data extends Component {
  displayData = () => {
    return (
        this.props.graphData && !!Object.keys(this.props.graphData).length &&
      Object.keys(
        this.props.graphData[Object.keys(this.props.graphData)[0]]
      ).map(ele => {
        return (
          <div>
            {ele}:
            {this.props.graphData[Object.keys(this.props.graphData)[0]][ele]}
          </div>
        );
      })
    );
  };
  render() {
    return (
      <div>
        {this.props.dataLoading ? <div>Loading...</div> : this.displayData()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    graphData: state.searchbarReducer.selectedData,
    dataLoading: state.searchbarReducer.dataLoading
  };
};

export default connect(mapStateToProps)(Data);
