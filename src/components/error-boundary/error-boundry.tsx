import React, {Component, ReactNode} from 'react'
import Error from "../error";
import {Flex} from "../UI";

export default class ErrorBoundary extends Component<{children : ReactNode}, {hasError : boolean}> {
    state = {
        hasError : false
    }

    componentDidCatch() {
        this.setState({hasError : !this.state.hasError})
    }

    render() {
        if(this.state.hasError) {
            return (
                <Flex >
                    <Error/>
                </Flex>
            )
        }

        return this.props.children;
    }
}
