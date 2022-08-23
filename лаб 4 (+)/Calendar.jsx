import React from "react";
import { CalendarBody } from "./CalendarBody";
import { CalendarHead } from "./CalendarHead";

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), selectedDays: [] };
    }
    changeDate = (value) => {
        this.setState({ date: value });
    };
    selectDays = (day) => {
        for (let i = 0; i < this.state.selectedDays.length; i++) {
            if (
                day.getDate() === this.state.selectedDays[i].getDate() &&
                day.getMonth() === this.state.selectedDays[i].getMonth() &&
                day.getFullYear() === this.state.selectedDays[i].getFullYear()
            )
                return this.setState(({ selectedDays }) => ({
                    selectedDays: [
                        ...selectedDays.slice(0, i),
                        ...selectedDays.slice(i + 1),
                    ],
                }));
        }
        this.setState(({ selectedDays }) => ({
            selectedDays: [...selectedDays, day],
        }));
    };
    render() {
        return (
            <>
<table className='tab'>
                <CalendarHead changeDate={this.changeDate} />
                <CalendarBody
                    date={this.state.date}
                    selectDays={this.selectDays}
                    selectedDays={this.state.selectedDays}
                /></table>
            </>
        );
    }
}