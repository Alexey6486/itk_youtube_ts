import {connect} from "react-redux";
import {News} from "./News";
import {DispatchTypeNewsReducer, addNewsAC} from "./news-reducer";
import { StateType } from "../../redux/store";

const mapStateToProps = (state: StateType) => {
    return {
        state: state.newsPage
    }
};
const mapDispatchToProps = (dispatch: DispatchTypeNewsReducer) => {
    return {
        addNews: (url: string) => dispatch(addNewsAC(url))
    }
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;