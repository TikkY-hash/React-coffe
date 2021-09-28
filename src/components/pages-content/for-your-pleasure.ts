import {PageContentType} from "../../types/page-content-type";
import ourCoffeePageContent from "./our-coffee-page-content";
import aboutContentImage from './coffee-839233_1920.png'
import img from './coffee-2179009_1920.png'

const  forYourPleasureContent : PageContentType = {
    ...ourCoffeePageContent,
    aboutContentImage,
    img,
    tittle : "About our goods",
    headerTittle : "For your pleasure"
}

export default forYourPleasureContent