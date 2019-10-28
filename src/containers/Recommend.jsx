import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions/creators';
import Recommend from '../components/recommend/index';

Recommend.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
	options: state.recommend.recommendlist,
});

const mapDispatchToProps = dispatch => ({
	selectRecommend: (id, score) => dispatch(action.selectRecommend(id, score)),
	onAddPlayPlmseq: id => dispatch(action.addPlayPlmseq(id)),
});

const RecommendContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Recommend);

export default RecommendContainer;