import React from "react";

type PropsType = {
    className?: string,
    id?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode
};

type StatesType = {
};

class Container extends React.Component<PropsType, StatesType> {
    render() {
        return (
            <div 
                className={ (this.props.className ? this.props.className : "") + " container mx-auto" }
                id={ (this.props.id ? this.props.id : "") }
                style={ this.props.style }
            >
                { this.props.children }
            </div>
        );
    }
};

export default Container;