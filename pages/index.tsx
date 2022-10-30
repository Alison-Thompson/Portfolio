import React from "react";

import ImageCard from "components/imageCard";
import TestingImage from "images/testing-photo.jpg";
import ProfilePicture from "images/profilePicture.jpeg";

import SocialCard from "components/socialCard";

type PropsType = {};

type StatesType = {};

class HomePage extends React.Component<PropsType, StatesType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div>

                <SocialCard
                    avatarImage={ ProfilePicture }
                    name="Alison Thompson"
                    title="Full-Stack Developer"
                    email="alisonthompson522@gmail.com"
                    phoneNumber="435-922-8032"
                    gitHubLink="https://github.com/Alison-Thompson"
                    linkedInLink="https://www.linkedin.com/in/alison-thompson-430462133/"
                    className="mb-10 mt-10"
                ></SocialCard>

                <ImageCard
                    className="w-64 h-64"
                    image={ TestingImage }
                    imageAlt={ "testing" }
                    title={ "My cool card!" }
                >
                    <div
                        className="w-full h-full p-2"
                    >
                        <p>
                            Here is a description of some cool thing!
                        </p>
                    </div>
                </ImageCard>
            </div>
        );
    }
}

export default HomePage