import {ContentPropsType} from "./content-type";

export interface PageContentType extends ContentPropsType{
    color : string,
    navBarPosition : string,
    img : string,
    headerTittle : string,
    paddingContentTop : number,
    paddingHeaderTop : number,
    backgroundSize : string,
    backgroundAttachment : string,
    paddingHeaderBottom : number,
    maxWidthText : number,
    aboutContentImage? : string,
    aboutContentImageWidth? : number,
    aboutContentImageHeight? : number,
}
