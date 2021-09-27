import { useEffect } from "react";
import { useHistory } from "react-router";

export default function LuxComponent(WrappedComponent, pageLabel) {
    return function LuxWrappedComponent(props) {
        const history = useHistory();

        useEffect(() => {
            // Set the page label so that the LUX data can be easily grouped by page.
            window.LUX.label = pageLabel;

            // Send the beacon once the component is mounted.
            window.LUX.send();

            // Listen for history changes, which indicate the user has navigated to
            // another page, and call LUX.init to initialise the next page view.
            const removeHistoryListener = history.listen((args) => {
                LUX.init();
            });

            // Remove the history listener when this component unmounts. The next
            // page component will attach its own history listener.
            return () => {
                removeHistoryListener();
            }
        }, []);

        return <WrappedComponent {...props} />;
    }
}
