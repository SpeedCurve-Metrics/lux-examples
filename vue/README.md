# LUX in Vue

This directory contains a project that was bootstrapped with [Vue CLI](https://cli.vuejs.org/).

## Where to find the LUX code

Look for `LUX START` and `LUX END` markers in these files:

1. **public/index.html** - Includes the lux.js `<script>` tags. Make sure to replace `%YOUR_LUX_ID%` with your LUX ID.
2. **src/App.vue** - Sets the page label and sends the LUX beacon.

## Running this example

To run this example application, run the following commands in this directory:

```
npm install
npm run serve
```

## Further improvements

`LUX.send()` is called in the `mounted` lifecycle callback for the top-level component. If your application has many top-level components, you might want to abstract this into a mixin. Below is an example of such a mixin.

```js
const luxMixin = {
  data: function () {
    return {
      luxLabel: ''
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      window.LUX.label = this.$data.luxLabel;
      window.LUX.send();
    })
  }
}

// Add the luxMixin to your components
new Vue({
  mixins: [luxMixin],
  data: function () {
      return {
          luxLabel: 'home'
      }
  }
})
```
