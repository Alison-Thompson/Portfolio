import React from "react";
import Image from "next/image";

type PropsType = {
    image: any // StaticImageData
    imageAlt: string,
    title: string,
    id?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode
};

type StatesType = {
    clicked: boolean
}

class Card extends React.Component<PropsType, StatesType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            clicked: false
        };
    }

    render() {
        return (
            <div 
                className={ this.props.className + " relative rounded-lg group cursor-pointer border border-gray-400" } 
                id={ this.props.id } 
                style={ this.props.style }
                onClick={() => {
                    this.setState({
                        clicked: !this.state.clicked
                    });
                }}
                onFocus={() => {
                    this.setState({
                        clicked: true
                    });
                }}
                onBlur={() => {
                    this.setState({
                        clicked: false
                    });
                }}
                tabIndex={0}
            >

                {/* Image Container Div */}
                <div 
                    className="object-cover overflow-hidden h-full w-full p-0 m-0 z-0 rounded-lg"
                >
                    <Image
                        className="rounded-lg"
                        src={ this.props.image }
                        alt={ this.props.imageAlt }
                        placeholder="blur"
                        fill
                    />
                </div>

                {/* Overlay Div */}
                <div 
                    className={`
                        absolute top-0 z-1 w-full h-full bg-gray-700  
                        rounded-lg transition-all shadow-md duration-300 
                        ${this.state.clicked ? "opacity-80" : "opacity-40 group-hover:opacity-80"}
                    `}
                >
                </div>

                {/* Title Div */}
                <div
                    className={`
                        rounded-lg text-white transition-all duration-300 z-3 absolute
                        top-0 w-full h-full flex justify-center items-center 
                        ${this.state.clicked ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
                    `}
                >
                    <p className="text-3xl">{ this.props.title }</p>
                </div>

                {/* Content Div */}
                <div
                    className={`
                        rounded-lg text-white transition-all duration-300 z-3 absolute
                        top-0 w-full h-full 
                        ${this.state.clicked ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    `}
                >
                    { this.props.children }
                </div>

            </div>
        );
    }
};

export default Card;