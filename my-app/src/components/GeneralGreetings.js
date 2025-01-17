import React from "react";
import css from './css/Sidebar.module.css';


class GeneralGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!!!",
            buttonText: "Exit",
        };
    }

    render (){
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default GeneralGreeting