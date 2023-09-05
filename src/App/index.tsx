import './index.css'
import {Routing} from "../pages";
import {withRouter} from "./providers";

function App() {
    return withRouter(() => <Routing/>);
}

export default App
