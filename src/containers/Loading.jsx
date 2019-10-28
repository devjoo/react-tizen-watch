import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Loading = () => (
	<div className="loading">
		<div className="rotate">진행중</div>
	</div>
);


Loading.propTypes = {
	appVersion: PropTypes.string,
};

const mapStateToProps = state => ({
	appVersion: state.ui.appVersion,
});

export default connect(mapStateToProps)(Loading);
