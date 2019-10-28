import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Page, Content} from '../components/common/Page';

const Splash = ({appVersion}) => (
	<Page>
		<Content>
			<div id="splash" className="splash">
				<p id="splash_version">{appVersion}</p>
			</div>
		</Content>
	</Page>
);


Splash.propTypes = {
	appVersion: PropTypes.string,
};

const mapStateToProps = state => ({
	appVersion: state.ui.appVersion,
});

export default connect(mapStateToProps)(Splash);
