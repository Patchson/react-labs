import React from "react";

export class CalendarHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",];
    prevMonth = () => {
        let date = new Date(
            this.state.date.getFullYear(),
            this.state.date.getMonth() - 1
        );
        this.setState({ date }, () => this.props.changeDate(this.state.date));
    };
    nextMonth = () => {
        let date = new Date(
            this.state.date.getFullYear(),
            this.state.date.getMonth() + 1
        );
        this.setState({ date }, () => this.props.changeDate(this.state.date));
    };
    render() {
        return (
            <>
                <div className='puk'>
                    {this.months[this.state.date.getMonth()]}
                    {this.state.date.getFullYear()}
                    <button onClick={this.prevMonth} className="butt">{"<"}</button>
                    <button onClick={this.nextMonth} className="butt">{">"}</button>
                </div>
            </>
        );
    }
}