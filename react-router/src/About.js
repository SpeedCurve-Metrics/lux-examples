import React from 'react';

export default class About extends React.Component {
    componentDidMount() {
        // LUX START
        // Set the page label so that the LUX data can be easily grouped by page.
        window.LUX.label = 'about';

        // Manually send the beacon once the component is mounted. If you have many
        // top-level components, you might want to consider abstracting this into a
        // higher-order component like TrackedComponent in the README.
        window.LUX.send();
        // LUX END
    }

    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        );
    }
}
