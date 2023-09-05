import {Routes, Route, useNavigate} from "react-router-dom";
import {ROUTES} from "../shared/const/Routing";
import {SignIn} from "./SignIn/SignIn";
import {Layout} from "../widgets/ui/Layout/Layout";
import {useEffect} from "react";
import {Home} from "./Home/Home";
import {Shop} from "./Shop/Shop";
import {Header} from "../widgets/ui/Header/Header";

export const Routing = () => {

    // const href = useNavigate()
    // useEffect(() => {
    //     if (window.location.pathname !== ROUTES.Login) href(ROUTES.Login);
    // }, [])

    return (
        <div className="wrapper">
            <Layout>
                <Routes>
                    <Route index path={ROUTES.Login} element={<SignIn/>}/>
                    <Route path={ROUTES.Home} element={<Home/>}/>
                    <Route path={ROUTES.Marketplace} element={<Shop/>}/>
                </Routes>
            </Layout>
        </div>
    );
};