import TemplateMainContentBlock from "../template-main-content-block";
import forYourPleasureContent from "../pages-content/for-your-pleasure";
import {useTypedSelector} from "../../hooks";
import {FC} from "react";

const ForYourPleasurePage : FC = () => {
    const {cartList,loading,error} = useTypedSelector(state => state.cartReducer)

    return (
        <TemplateMainContentBlock
            {...forYourPleasureContent}
            data={cartList}
            id={6}
            loading={loading}
            error={error}
        />
    )
}

export default ForYourPleasurePage