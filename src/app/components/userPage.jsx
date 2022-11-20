/* eslint-disable */ 
import React, { useState, useEffect } from "react";
import api from "../api";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const UserPage = ({ match }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(match.params.userId).then((data) => setUser(data));
    }, [user]);
    return user ? (
        <div>
            <h1>{user.name}</h1>
            <h2>{"Профессия:" + user.profession.name}</h2>
            <QualitiesList qualities={user.qualities} />
            <h2>{"Rate:" + user.rate}</h2>
            <h4>{"completedMeetings:" + user.completedMeetings}</h4>
            <button>Все пользователи</button>
        </div>
    ) : (
        <h1>Loading...</h1>
    );
};

UserPage.propTypes = {
    match: PropTypes.object
};
export default UserPage;
