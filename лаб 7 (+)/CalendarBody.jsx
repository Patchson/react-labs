import React from "react";

export class CalendarBody extends React.Component {
    dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    currentDate = new Date(); // today
  
    render() {
      const date = new Date(
          this.props.date.getFullYear(),
          this.props.date.getMonth(),
          1
        ), // first day of current month
        selectedDays = this.props.selectedDays,
        notes = this.props.notes;
      return (
        <table className='calBody'>
          <thead>
            <tr>
              {this.dayNames.map((name) => (
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
                      selectedDays,
                      notes
                    )}
                    onClick={() => {
                      if (date.getMonth() === wdate.getMonth())
                        this.selectDays(wdate);
                    }}
                  >
                    {wdate.getDate()}
                  </td> // wdate === fullMonth[i][j]
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  
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
        // weeks
        fullMonth[i] = [];
        for (let j = 0; j < 7; j++) {
          // days
          fullMonth[i][j] = new Date(year, month, day++);
        }
      }
      return fullMonth;
    }
    styleTd = (wdate, currentDate, date, selectedDays, notes) => {
      if (date.getMonth() !== wdate.getMonth())
        return { color: "rgb(224, 223, 223)" };
  
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].date === wdate.toLocaleDateString())
          return { background: "#FF7F50" };
      }
      for (let i = 0; i < selectedDays.length; i++) {
        if (selectedDays[i].toLocaleDateString() === wdate.toLocaleDateString())
          return { background: "#B6CDF0" };
      }
      if (
        wdate.getDate() === currentDate.getDate() &&
        wdate.getMonth() === currentDate.getMonth() &&
        wdate.getFullYear() === currentDate.getFullYear()
      )
        return { background: "#D89FEE" };
    };
  
    selectDays = (wdate) => {
      this.setState({}, () => this.props.selectDays(wdate));
    };
    
  }