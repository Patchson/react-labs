import React from "react";

export class CalendarBody extends React.Component {
    days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    currentDate = new Date();
    startDay(date) {
        let startDay;
        date.getDay() === 0 ? (startDay = 6) : (startDay = date.getDay() - 1);
        return startDay;
    }
    oneMonth(date) {
        let fullMonth = [],
            day = 1 - this.startDay(date),
            month = date.getMonth(),
            year = date.getFullYear();
        for (let i = 0; i < 6; i++) {
            fullMonth[i] = [];
            for (let j = 0; j < 7; j++) {
                fullMonth[i][j] = new Date(year, month, day++);
            }
        }
        return fullMonth;
    }
    styleTd = (wdate, currentDate, date, selectedDays) => {
        if (date.getMonth() !== wdate.getMonth())
            return { color:"lightgrey" };
        for (let i = 0; i < selectedDays.length; i++) {
            if (
                (selectedDays[i].getDate() === wdate.getDate() &&
                selectedDays[i].getMonth() === wdate.getMonth() &&
                selectedDays[i].getFullYear() === wdate.getFullYear())

            ) {
              if (selectedDays[i].getDate() !== currentDate.getDate())
                return {background: "#d89fef"};}
    }
        if (
            wdate.getDate() === currentDate.getDate() &&
            wdate.getMonth() === currentDate.getMonth() &&
            wdate.getFullYear() === currentDate.getFullYear()

        )
            return { background:"#9fc4ee" };
    };
    selectDays = (wdate) => {
        this.setState({}, () => this.props.selectDays(wdate));
    };
    render() {
        const date = new Date(
                this.props.date.getFullYear(),
                this.props.date.getMonth(),
                1
            ),
            selectedDays = this.props.selectedDays;
        return (
            <table className='table'>
                <thead>
                    <tr>
                        {this.days.map((name) => (
                            <td key={name}>{name}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.oneMonth(date).map((week, index) => (
                        <tr key={index}>
                            {week.map((wdate, index) => (
                                <td
                                    key={index}
                                    style={this.styleTd(
                                        wdate,
                                        this.currentDate,
                                        date,
                                        selectedDays
                                    )}
                                    onClick={() => {
                                        if (date.getMonth() === wdate.getMonth())
                                            this.selectDays(wdate);
                                    }}
                                >
                                    {wdate.getDate()}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}