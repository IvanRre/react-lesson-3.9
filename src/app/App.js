import React from "react";
import NavBar from "./components/navBar";
import Users from "./layouts/users";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPage from "./components/userPage";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users" exact component={Users} />
                <Route path="/users/:userId" component={UserPage} />
            </Switch>
        </div>
    );
}

export default App;
