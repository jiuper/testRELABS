import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {Provider} from "react-redux";
import {setupStore} from "../../shared/lib/module/store/store";


export const withRouter = (component: () => JSX.Element) => {
    const store = setupStore()
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback="...loader">
                    {component()}
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
};