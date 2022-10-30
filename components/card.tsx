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

}

class Card extends React.Component<PropsType, StatesType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div className={ this.props.className + " relative rounded-lg group" } id={ this.props.id } style={ this.props.style }>

                {/* Image Container Div */}
                <div className="object-cover overflow-hidden h-full w-full p-0 m-0 z-0 rounded-lg">
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
                    className="
                        absolute top-0 z-1 w-full h-full bg-gray-700 opacity-40 
                        group-hover:opacity-80 rounded-lg transition-all shadow-md
                        duration-300
                    "
                >
                </div>

                {/* Title Div */}
                <div
                    className="
                        rounded-lg text-white opacity-100 group-hover:opacity-0 transition-all 
                        duration-300 z-3 absolute top-0 w-full h-full flex justify-center
                        items-center
                    "
                >
                    <p className="text-3xl">{ this.props.title }</p>
                </div>

                {/* Content Div */}
                <div
                    className="
                        rounded-lg text-white opacity-0 group-hover:opacity-100 
                        transition-all duration-300 z-3 absolute top-0 w-full h-full
                    "
                >
                    { this.props.children }
                </div>

            </div>
        );
    }
};

export default Card;