import { connect } from 'react-redux';
import * as action from '../actions/creators';
import SongList from '../components/songList/index';

const mapStateToProps = (state) => {
	const commonProps = {
		pageTitle: (state.pages.find(p => p.id === state.ui.selectedPageId)).title,
		selectedPageId: state.ui.selectedPageId,
		activateLoading: state.ui.activateLoading,
	};
	
	switch (state.ui.selectedPageId) {
		case 'chart':
			return {
				...commonProps,
				songlist: state.chart.songlist,
			};
		case 'sports':
			return {
				...commonProps,
				pageSubTitle: (state.sports.find(s => s.id === state.ui.selectedSportsId)).title,
				songlist: (state.sports.find(s => s.id === state.ui.selectedSportsId)).songlist,
			};
		case 'recommend':
			return {
				...commonProps,
				pageSubTitle: `인기 ${state.recommend.attributes.currentScore}위`,
				songlist: state.recommend.songlist,
			};
		default :
			break;
	}
};

const mapDispatchToProps = (dispatch) => ({
	onAddAllPlay: ids => dispatch(action.addPlay(ids)),
	onAddPlay: id => dispatch(action.addPlay(id)),
});

const SongListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SongList);

export default SongListContainer;