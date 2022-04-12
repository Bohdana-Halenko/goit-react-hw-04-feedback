import React from "react";
import PropTypes from 'prop-types';
import s from './Section.module.css';


function Section({ title, children }) {
	return (
		<>
			<h2 className={s.feedbackSection}>{title}</h2>
			{children}
		</>
	)
};

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	};

export default Section;