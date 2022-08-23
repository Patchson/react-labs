import React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.toOffsetDate(this.props),
        };
    }
    
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );  
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    toOffsetDate({format, timezone}) {
        var d = new Date(new Date().setMilliseconds(timezone * 3600 * 1000));
        var hrs = (d.getUTCHours() % format);
        var mins = d.getUTCMinutes();
        var secs = d.getUTCSeconds();
        return `${hrs}:${mins}:${secs}`;

    }

    tick() {
        this.setState({
            time: this.toOffsetDate(this.props)
        });
    }

    render() {
        return (
            <p>
                Время - {this.state.time}
            </p>
        );
    }
}