import React, { Component } from 'react';
import './App.css';
import 'react-input-range/lib/css/index.css'
import LineChart from './LineChart';
import InputRange from 'react-input-range';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 1,
      cycles: 1,
      phase: 0,
      viewBoxWidth: 700,
      viewBoxHeight: 300,
      sampling: 10
    }
  }


  createSinusoidal(frequency, cycles, phase, sampling){
    const data = []
    let t = 0
    let increase = Math.PI * 2 / sampling;

    for (let x = 0; x < cycles; x++) {
      for (let i = 0; i <= sampling; i += 1) {
        const y = (Math.sin(frequency * t + phase));
        t += increase;
        data.push({t,y})
      }
    }


    return data;
  }

  render() {

    return (
    <div className="App">
        <div className="header">Use the sliders to adapt the chart</div>
        <div className="container-fluid bg-grey">
          <div className="row">
            <div className="col-sm-4">
              <form className="form">

                <p>frequency</p>
                <InputRange
                  maxValue={50}
                  minValue={1}
                  value={this.state.frequency}
                  onChange={value => this.setState({ frequency: value, sampling: value * 10 })}
                />

                <p>cycles</p>
                <InputRange
                    maxValue={10}
                    minValue={1}
                    value={this.state.cycles}
                    onChange={value => this.setState({ cycles: value })}
                  />

                <p>phase</p>
                <InputRange
                  maxValue={100}
                  minValue={0}
                  value={this.state.phase}
                  onChange={value => this.setState({ phase: value })}
                />

                <p>size</p>
                <InputRange
                  maxValue={500}
                  minValue={50}
                  value={this.state.viewBoxHeight}
                  onChange={value => this.setState({ viewBoxHeight: value })}
                />


                <p>sampling rate</p>
                <InputRange
                  maxValue={500}
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
                                                      svgWidth = {this.state.viewBoxWidth} />
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
