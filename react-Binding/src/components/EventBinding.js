import React from "react";

class EventBinding extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }
    
    // handleClick() {
    //     this.setState({
    //         introduction : this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!" ,
    //     });
    //     console.log(this.state.introduction);
    // }

    handleClick = () => {
        this.setState({
            introduction : this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!" ,
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                {/* <button onClick={() => this.handleClick()}> */}
                {/* <button onClick={this.handleClick.bind(this)}> */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;