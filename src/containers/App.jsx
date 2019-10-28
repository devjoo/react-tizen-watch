import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as action from '../actions/creators';
import Error from './Error';
import Splash from './Splash';
import Loading from './Loading';
import Pages from './Pages';
import Player from './Player';
import Sports from './Sports';
import SongList from './SongList';
import Recommend from './Recommend';

class App extends Component {
	static propTypes = {
		mainRoute: PropTypes.string,
		selectedPageId: PropTypes.string,
		selectedDeviceId: PropTypes.string,
		activateLoading: PropTypes.any,
		onClosePage: PropTypes.func.isRequired,
		onCloseDevice: PropTypes.func.isRequired,
	};
	
	static defaultProps = {
		mainRoute: null,
		selectedPageId: null,
		selectedDeviceId: null,
		activateLoading: null,
	};
	
	componentDidMount() {
		window.accessory.connect();
		
		window.addEventListener('tizenhwkey', (ev) => {
			if ((ev.key || ev.keyName) === 'back') {
				if (!this.props.selectedPageId) {
					try {
						window.tizen.application.getCurrentApplication().exit();
					} catch (err) {
						// ignore
					}
				} else if (this.props.selectedPageId && !this.props.selectedSportsId && !this.props.selectedRecommendId) {
					this.props.onClosePage(this.props.selectedPageId);
				} else {
					this.props.oncloseSubPage(this.props.selectedSportsId);
				}
			}
		});
		
		window.addEventListener('keyup', (e) => {
			if (e.key === 'ArrowRight') {
				window.dispatchEvent(new CustomEvent('rotarydetent', {detail: {direction: 'CW'}}));
			} else if (e.key === 'ArrowLeft') {
				window.dispatchEvent(new CustomEvent('rotarydetent', {detail: {direction: 'CCW'}}));
			} else if (e.key === 'Backspace') {
				window.dispatchEvent(new KeyboardEvent('tizenhwkey', {key: 'back'}));
			}
		});
	}
	
	componentDidUpdate() {
	
	}
	
	render() {
		return (
			<div>
				{this.props.mainRoute === 'error' && <Error/>}
				{this.props.mainRoute === 'splash' && <Splash/>}
				{this.props.activateLoading === 'loading' && <Loading/>}
				{this.props.mainRoute === 'pages' && !this.props.selectedPageId && <Pages/>}
				{/*{this.props.mainRoute === 'pages' && this.props.selectedPageId && !this.props.selectedDeviceId && <Page />}*/}
				{this.props.selectedPageId === 'player' && <Player/>}
				{this.props.selectedPageId === 'sports' && !this.props.selectedSportsId && <Sports/>}
				{this.props.selectedPageId === 'recommend' && !this.props.selectedRecommendId && <Recommend/>}
				{this.props.selectedPageId === 'chart' && <SongList/>}
				{this.props.selectedPageId === 'sports' && this.props.selectedSportsId && <SongList/>}
				{this.props.selectedPageId === 'recommend' && this.props.selectedRecommendId && <SongList/>}
				{/*{this.props.mainRoute === 'pages' && this.props.selectedPageId && this.props.selectedDeviceId && <Device />}*/}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		mainRoute: state.ui.mainRoute,
		selectedPageId: state.ui.selectedPageId,
		selectedSportsId: state.ui.selectedSportsId,
		selectedRecommendId: state.ui.selectedRecommendId,
		selectedDeviceId: state.ui.selectedDeviceId,
		activateLoading: state.ui.activateLoading,
	};
};

const mapDispatchToProps = dispatch => ({
	onClosePage: id => dispatch(action.closePage(id)),
	oncloseSubPage: id => dispatch(action.closeSubPage(id)),
	onCloseDevice: () => dispatch(action.closeDevice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
