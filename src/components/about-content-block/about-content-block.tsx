import React,{FC} from 'react';
import {ContentPropsType} from "../../types/content-type";
import {Container,Col,Row} from "reactstrap";
import {AboutContentBlockStyle} from "../UI";

const AboutContentBlock : FC<ContentPropsType> = React.memo((props) => {
    const {aboutContentImageHeight,aboutContentImageWidth,rightBlock,aboutContentImage} = props

    return (
        <AboutContentBlockStyle
            aboutContentImageWidth={aboutContentImageWidth}
            aboutContentImageHeight={aboutContentImageHeight}
        >
            <Container>
                <Row>
                    <Col md = "6">
                        <div className="image__position" >
                            <img src={aboutContentImage} alt = "our coffee" />
                        </div>
                    </Col>
                   <Col md = "6">
                       {rightBlock}
                   </Col>
                </Row>
            </Container>
            <div className="line__block d-flex justify-content-center">
                <div className="line"/>
            </div>
        </AboutContentBlockStyle>
    );
});

export default AboutContentBlock;