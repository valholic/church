import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register } from "../../pages";
import MainApp from "../../pages/MainApp";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/:uid?/*" Component={MainApp} />
            </Routes>
        </Router>
    )
}
