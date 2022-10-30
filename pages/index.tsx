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
            <div>
                <Card
                    className="w-64 h-64 ml-10 mt-10"
                    image={TestingImage}
                    imageAlt={"testing"}
                    title={"My cool card!"}
                >
                    some cool content
                    <button>test</button>
                </Card>
            </div>
        );
    }
}

export default HomePage