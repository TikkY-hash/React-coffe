import React, {FC} from 'react';
import {Route,Switch} from "react-router-dom";
import Footer from "../footer";
import {ForYourPleasurePage,OurCoffeePage,StartPage,CartPage} from '../pages'
import arrow from './3414240891558965381-128.png'
import {TopLine,ArrowTopStyle} from "../UI";

const App : FC = () => {
    return (
        <>
            <TopLine/>
            <Switch>
                 <Route path = "/" exact component={StartPage}/>
                 <Route path="/our-coffee-page/" exact component={OurCoffeePage}/>
                 <Route path="/for-your-pleasure-page/" component={ForYourPleasurePage}/>
                 <Route path="/our-coffee-page/:id" component={CartPage}/>
                 <Route render={() => "Page not found"}/>
            </Switch>
            <Footer/>
            <ArrowTopStyle onClick={() => document.documentElement.scrollTop = 0}>
                <img src={arrow} height={30} width={30} alt="arrow"/>
            </ArrowTopStyle>
        </>
    );
};

export default App;