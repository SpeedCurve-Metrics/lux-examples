# LUX in React with react-router

This directory contains a project that is very similar to the [React example](../react). The main difference is that react-router is used to handle transitions between pages. You'll notice that the LUX integration is exactly the same as the React example, in that the `componentDidMount` callback is used to determine when a component has finished loading.

## Where to find the LUX code

Look for `LUX START` and `LUX END` markers in these files:

1. **public/index.html** - Includes the lux.js `<script>` tags. Make sure to replace `%YOUR_LUX_ID%` with your LUX ID.
2. **src/Home.js** and **src/About.js** - Sets the page label for each page and sends the LUX beacon.

## Running this example

To run this example application, run the following commands in this directory:

```
npm install
npm start
```

## Further improvements

`LUX.send()` is called in the `componentDidMount` callback for each page component. If your application has many page components, you might want to abstract this into a higher-order component. Below is an example of such a component.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

// LuxComponent wraps any other component and adds simple LUX tracking.
function LuxComponent(WrappedComponent, luxLabel) {
    return class extends React.Component {
        componentDidMount() {
            window.LUX.label = luxLabel;
            window.LUX.send();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

// Wrap each of your page components...
const WrappedHomeComponent = LuxComponent(Home, 'home');
const WrappedAboutComponent = LuxComponent(About, 'about');

// ...And use them in place of the regular components
<Switch>
    <Route exact path="/">
        <WrapedHomeComponent />
    </Route>
    <Route path="/about">
        <WrapedAboutComponent />
    </Route>
</Switch>
```
