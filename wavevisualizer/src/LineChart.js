import React, {Component} from "react"
import "./LineChart.css"

class LineChart extends Component {
  // GET MAX & MIN X
  getMinX() {
    const {data} = this.props;
    return data[0].t;
  }
  getMaxX() {
    const {data} = this.props;
    return data[data.length - 1].t;
  }
  // GET MAX & MIN Y
  getMinY() {
    const {data} = this.props;
    return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
  }
  getMaxY() {
    const {data} = this.props;
    return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
  }

  getSvgX(x) {
    const {svgWidth} = this.props;
    return (x / this.getMaxX() * svgWidth);
  }
  getSvgY(y) {
    const {svgHeight} = this.props;

    return svgHeight * 0.5 - (y / (this.getMaxY() - this.getMinY()) * svgHeight * 0.5);
  }

  makePath() {
    const {data, color} = this.props;

    let pathD = "M" + this.getSvgX(data[0].t) + " " + this.getSvgY(data[0].y) + " ";

    pathD += data.map((point, i) => {
      return "L" + this.getSvgX(point.t) + " " + this.getSvgY(point.y) + " ";
    });

    //Firefox gets somehow confused about the comma separating coordinates.
    //This hack makes the code useful both for Chrome as for FF
    pathD = pathD.replace(/ ,/g, " ")

    return (
      <path className="linechart_path" d={pathD} style={{stroke: color}} />
    );
  }

  makeAxis() {
    const minX = this.getMinX(), maxX = this.getMaxX();
    const minY = this.getMinY(), maxY = this.getMaxY();

    return (
      <g className="linechart_axis">
        <line
          x1={this.getSvgX(minX)} y1={(this.getSvgY(minY) + this.getSvgY(maxY)) * 0.5}
          x2={this.getSvgX(maxX)} y2={(this.getSvgY(minY) + this.getSvgY(maxY)) * 0.5} />
        <line
          x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
          x2={this.getSvgX(minX)} y2={this.getSvgY(maxY)} />
      </g>
      );
    }

  render() {
    const {svgHeight, svgWidth} = this.props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {this.makePath()}
        {this.makeAxis()}
      </svg>
    );
  }
}

LineChart.defaultProps = {
  data: [],
  color: '#2196F3',
  svgHeight: 300,
  svgWidth: 700
}

export default LineChart;
