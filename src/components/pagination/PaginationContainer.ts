import { connect } from "react-redux";
import { Pagination } from "./Pagination";
import {StateType} from "../../redux/store";


const mapStateToProps = () => {
    return {

    };
};
const mapDispatchToProps = () => {
    return {

    };
};

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);