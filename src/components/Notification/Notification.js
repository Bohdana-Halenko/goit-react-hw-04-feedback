import PropTypes from 'prop-types';
import React from "react";
import s from './Notification.module.css';

function Notification ({ message }) {
	return <h2 className={s.notification}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
