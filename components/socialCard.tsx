import React from "react";
import Image from "next/image";
import styles from "styles/socialCard.module.css";
import GithubLogo from "images/githubLogo.png";
import LinkedInLogo from "images/linkedInLogo.png";

type PropsType = {
    avatarImage: any,  // StaticImageData
    name: string,
    title: string,
    email: string,
    gitHubLink: string,
    linkedInLink: string,
    phoneNumber: string,
    className?: string,
    id?: string,
    style?: React.CSSProperties
};

type StatesType = {};

class SocialCard extends React.Component<PropsType, StatesType> {

    static defaultProps = {
        className: "",
        id: "",
        style: {}
    };

    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div
                className={ this.props.className + " " + styles["social-card"] + " group" }
                id={ this.props.id }
                style={ this.props.style }
            >
                <div
                    className="flex justify-between items-center w-2/3"
                >
                    <div
                        className="relative rounded-full h-24 w-24 border border-gray-300"
                    >
                        <Image
                            className="rounded-full"
                            src={ this.props.avatarImage }
                            alt={ "Profile Picture" }
                            placeholder="blur"
                            fill
                        />
                    </div>
                    <div
                        className="items-start h-full"
                    >
                        <p
                            className="mr-3 text-2xl text-primary group-hover:text-black"
                        >{ this.props.name }</p>
                        <p
                            className="group-hover:text-gray-800"
                        >
                            { this.props.title }
                        </p>
                    </div>
                </div>
                <div
                    className="w-full mt-2"
                >
                    <p>
                        Email: <a 
                                href={`mailto:${ this.props.email }`}
                                className="hover:underline hover:text-blue-900"
                            >{ this.props.email }</a>
                    </p>
                    <p>
                        Phone Number: <a 
                                href={`tel:${ this.props.phoneNumber }`}
                                className="hover:underline hover:text-blue-900"
                            >{ this.props.phoneNumber }</a>
                    </p>
                </div>

                <div className="absolute bottom-2 flex">
                    <a href={this.props.gitHubLink} target="_blank" rel="noreferrer">
                        <div
                            className="relative rounded-full h-8 w-8"
                        >
                            <Image
                                className="rounded-full"
                                src={ GithubLogo }
                                alt={ "GitHub Logo" }
                                placeholder="blur"
                                fill
                            />
                        </div>
                    </a>
                    <a href={this.props.linkedInLink} target="_blank" rel="noreferrer" className="ml-3">
                        <div
                            className="relative h-8 w-9"
                        >
                            <Image
                                src={ LinkedInLogo }
                                alt={ "LinkedIn Logo" }
                                placeholder="blur"
                                fill
                            />
                        </div>
                    </a>
                </div>

            </div>
        )
    };

};

export default SocialCard;