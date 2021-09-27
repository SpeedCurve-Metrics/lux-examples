# LUX in React with react-router

This directory contains a project that is very similar to the [React example](../react). The main difference is that react-router is used to handle transitions between pages. You'll notice that the LUX integration is exactly the same as the React example, in that the `componentDidMount` callback is used to determine when a component has finished loading.

## Where to find the LUX code

Look for `LUX START` and `LUX END` markers in these files:

1. **public/index.html** - Includes the lux.js `<script>` tags. Make sure to replace `%YOUR_LUX_ID%` with your LUX ID.
2. **src/LuxComponent.js** and **src/App.js** - `LuxComponent` is a higher-order component that deals with the `LUX` API so that individual components don't have to. The main `App` component uses `LuxComponent` to wrap the individual page components.

## Running this example

To run this example application, run the following commands in this directory:

```
npm install
npm start
```

## Further improvements

Page views that were initiated by the browser's back and forward button will not be recorded in this example application. This is because the history listener in `LuxComponent` is removed before the navigation occurs. If you want to record back/forward page views as regular page views, you may want to call `LUX.init()` before removing the history listener.
