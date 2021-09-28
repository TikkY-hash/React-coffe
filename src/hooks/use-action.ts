import reducers from '../action-creators/'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(reducers,dispatch)
}

export default useAction