import React from "react";

export class CalendarHead extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }
    monthNames = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",];
  
    render() {
      return (
        <>
          <div className='calHead'>
            {this.monthNames[this.state.date.getMonth()]}
            {this.state.date.getFullYear()}
            <button onClick={this.prevMonth}>{"<"}</button>
            <button onClick={this.nextMonth}>{">"}</button>
          </div>
        </>
      );
    }
  
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
  }