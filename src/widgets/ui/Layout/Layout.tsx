import {ILayoutType} from "./Layout.type";

export const Layout = ({children}:ILayoutType) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};