import {connect} from 'react-redux';
import * as action from '../actions/creators';
import Player from '../components/player/index';

const mapStateToProps = state => ({
	attributes: state.player.attributes,
	progressCircle: state.player.progressCircle,
	isPlaying: state.player.isPlaying,
});

const mapDispatchToProps = dispatch => ({
	onSetProgress: (endPct, transitionSecond) => dispatch(action.setProgress(endPct, transitionSecond)),
	onControl: mode => dispatch(action.control(mode)),
});

const PlayerContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Player);

export default PlayerContainer;
