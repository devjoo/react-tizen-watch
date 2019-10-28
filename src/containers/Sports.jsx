import {connect} from 'react-redux';
import * as action from '../actions/creators';
import Sports from '../components/sports/index';

const mapStateToProps = (state) => {
	const activeSportsId = state.ui.activeSportsId;
	const current = state.sports.find(s => s.id === activeSportsId);
	
	return {
		options: state.sports,
		activeSportsId: activeSportsId,
	};
};

const mapDispatchToProps = dispatch => ({
	activateSports: id => dispatch(action.activateSports(id)),
	selectSports: id => dispatch(action.selectSports(id)),
	addPlayTag: id => dispatch(action.addPlayTag(id)),
});


const SportsContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Sports);

export default SportsContainer;