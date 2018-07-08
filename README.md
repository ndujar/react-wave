# react-wave
A react app for visualizing sine signals

This app uses React and Bootstrap to render a sine function under the effect of the following modifiable parameters:

-Frequency (in Hz)

-Number of cycles to present

-Phase (in degrees)

Besides, it enables the user to enhance the render by means of an scalable plot (in Y axis) and a modifiable resolution per cycle (sampling rate).

# Usage

In order to inspect it, clone the repository in your computer, then, in the project directory `/wavevisualizer`, you can run:

### `npm install`

then

### `npm start`

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

If otherwise you are only interested in the bundle, go to the `/wavevisualizer/build` folder and get it from there.

## Initial values are set to one Hz, one cycle, no delay (phase = 0 degrees)

![alt text](https://raw.githubusercontent.com/ndujar/react-wave/master/img/Start.png)

## The values of frequency range from 1 Hz to 50 Hz

![alt text](https://raw.githubusercontent.com/ndujar/react-wave/master/img/Frequency.png)

## The app allows to represent from 1 to 10 cycles in the same chart

![alt text](https://raw.githubusercontent.com/ndujar/react-wave/master/img/Cycles.png)

## Initial delay of the signal can be modified between 0 and 360 degrees (2PI radians)

![alt text](https://raw.githubusercontent.com/ndujar/react-wave/master/img/Phase.png)

## The vertical size of the chart can be reduced to as few as 50 pixels or extended up to 500 pixels

![alt text](https://raw.githubusercontent.com/ndujar/react-wave/master/img/Size.png)

## By default, for every one Hz the resolution sets automatically to 20 points. However, the user can easily adapt the chart to display up to 1000 points. Just drag the slider to the desired level.

![alt text](https://raw.githubusercontent.com/ndujar/react-wave/master/img/Sampling.png)
