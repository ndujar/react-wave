import React, { Component } from 'react';
import './App.css';
import 'react-input-range/lib/css/index.css'
import LineChart from './LineChart';
import InputRange from 'react-input-range';

//App class is the default Component provided by create-react-app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 1,
      cycles: 1,
      phase: 0,
      viewBoxWidth: 700,
      viewBoxHeight: 300,
      sampling: 20
    }
  }

  //createSinusoidal: This function outputs the actual list of x,y pairs to be displayed
  createSinusoidal(frequency, cycles, phase, sampling){
    const data = []                         //The array containing the x,y pairs
    let t = 0                               //The representation of the time (x)
    let increase = Math.PI * 2 / sampling;  //The timestep as a function of a whole cycle (360 deg)

    //First, we iterate for as many cycles as required by the user
    for (let x = 0; x < cycles; x++) {
      //Then, for each cycle we iterate until the whole time sequence (number of samples) has been completed
      for (let i = 0; i <= sampling; i += 1) {
        //Thephase is given in degrees, so it needs conversion into radians
        const y = (Math.sin(frequency * t + phase * (2 * Math.PI / 360)));
        //Move one step forward in the char
        t += increase;
        //Add the pair of coordinates
        data.push({t,y})
      }
    }
    return data;
  }
  //render: This function returns the HTML elements needed to visualize the chart
  render() {

    return (
    <div className="App">
        <div className="header">Use the sliders to adapt the chart</div>
        <div className="container-fluid bg-grey">
          <div className="row">
            <div className="col-sm-4">
              <form className="form">

                <p>frequency (Hz)</p>
                <InputRange
                  maxValue={50}
                  minValue={1}
                  value={this.state.frequency}
                  onChange={value => this.setState({ frequency: value, sampling: value * 20 })}
                />

                <p>cycles (units)</p>
                <InputRange
                    maxValue={10}
                    minValue={1}
                    value={this.state.cycles}
                    onChange={value => this.setState({ cycles: value })}
                  />

                <p>phase (deg)</p>
                <InputRange
                  maxValue={360}
                  minValue={0}
                  value={this.state.phase}
                  onChange={value => this.setState({ phase:  value })}
                />

                <p>size (px)</p>
                <InputRange
                  maxValue={500}
                  minValue={50}
                  value={this.state.viewBoxHeight}
                  onChange={value => this.setState({ viewBoxHeight: value })}
                />


                <p>sampling rate (number of displayed points)</p>
                <InputRange
                  maxValue={1000}
                  minValue={10}
                  value={this.state.sampling}
                  onChange={value => this.setState({ sampling: value })}
                />
              </form>
            </div>
            <div className="col-sm-8">
              <LineChart data={this.createSinusoidal(this.state.frequency,
                                                      this.state.cycles,
                                                      this.state.phase,
                                                      this.state.sampling)}
                         svgHeight = {this.state.viewBoxHeight}
                         svgWidth = {this.state.viewBoxWidth}
              />
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
