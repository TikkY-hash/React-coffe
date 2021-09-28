import {PageContentType} from "../../types/page-content-type";
import image from "./coffee-shop-1209863_1920.png";
import contentImage from './girl-865304_1920.png'

const ourCoffeePageContent : PageContentType = {
    color : "#FFFFFF",
    navBarPosition : "flex-start",
    tittle : "About our beans",
    content : [
        {
            id : 1,text : `
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        `},
        {
            id : 2,text : `
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. 
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
        `}
    ],
    paddingContentTop : 26,
    img : image ,
    headerTittle : "Our Coffee",
    paddingHeaderTop : 60,
    backgroundAttachment : "",
    backgroundSize : "cover",
    paddingHeaderBottom : 84,
    maxWidthText : 346,
    aboutContentImage : contentImage,
    aboutContentImageWidth : 272,
    aboutContentImageHeight : 355
}

export default ourCoffeePageContent