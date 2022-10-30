import React from "react";
import Card from "components/card";
import TestingImage from "images/testing-photo.jpg";

type PropsType = {};

type StatesType = {};

class HomePage extends React.Component<PropsType, StatesType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <Card
                className="w-64 h-64 ml-10 mt-10 border border-gray-400"
                image={TestingImage}
                imageAlt={"testing"}
                title={"My cool card!"}
            >
                some cool content
            </Card>
        );
    }
}

export default HomePage