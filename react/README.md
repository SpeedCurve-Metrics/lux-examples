# LUX in React

This directory contains a project that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Where to find the LUX code

Look for `LUX START` and `LUX END` markers in these files:

1. **public/index.html** - Includes the lux.js `<script>` tags. Make sure to replace `%YOUR_LUX_ID%` with your LUX ID.
2. **src/App.js** - Sets the page label and sends the LUX beacon.

## Important: Calling `LUX.init()`

In a single-page application (SPA) you must call `LUX.init()` when a user navigates to a new page. This example application does not have multiple pages, so it does demonstrate how to call `LUX.init()`. Please see the [react-router](../react-router) example to call `LUX.init()` in a SPA. 

## Running this example

To run this example application, run the following commands in this directory:

```
npm install
npm start
```

## Further improvements

`LUX.send()` is called in the `componentDidMount` callback for the top-level component. If your application has many top-level components, you might want to abstract this into a higher-order component. Below is an example of such a component.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

// LuxComponent wraps any other component and adds simple LUX tracking.
function LuxComponent(WrappedComponent, label) {
    return class extends React.Component {
        componentDidMount() {
            window.LUX.label = label;
            window.LUX.send();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

// Take a normal component...
class HomePageComponent extends React.Component {
    render() {
        // ...
    }
}

// ...Wrap it with LuxComponent()...
const WrappedHomePage = LuxComponent(HomePageComponent, 'home');

// ...And use it like a normal component
ReactDOM.render(<WrappedHomePage />, document.getElementById('root'));
```
