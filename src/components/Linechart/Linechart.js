import React, { Component } from "react";
import LineChart from "react-linechart";
import { connect } from "react-redux";
import "../../../node_modules/react-linechart/dist/styles.css";
class Linechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidUpdate(preProps) {
    if (
      !!Object.keys(this.props.graphData ? this.props.graphData : {}).length &&
      this.props.graphData !== preProps.graphData
    ) {
      this.mapPropsToData();
    }
  }
  mapPropsToData = () => {
    let temp
    let arr = [];
    this.props.graphData && Object.keys(this.props.graphData).map((timeLine, index) => {
      if (index < 30) {
        arr.unshift({
          x: 29-index,
          y: parseInt(this.props.graphData[timeLine]["1. open"])
        });
      }
    });
    this.setState(
      {
        data: [
          {
            color: "steelblue",
            points: arr
          }
        ]
      },
      () => {
        console.log(this.state.data);
      }
    );
  };
  render() {
    return (
      <div>
        {!!this.state.data.length && (
          <LineChart
            width={600}
            height={400}
            data={this.state.data}
            xLabel="Days"
            yLabel="Price"
          />
        )}
     
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    graphData: state.searchbarReducer.selectedData
  };
};

export default connect(mapStateToProps)(Linechart);
