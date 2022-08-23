import React from "react";
import { CalendarBody } from "./CalendarBody";
import { CalendarHead } from "./CalendarHead";

function Calendar({ Component }) {

  class Calendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        selectedDays: [],
        showForm: false,
        noteDate: new Date(),
        notes: [],
      };
    }

    render() {
      return (
        <>
          <div className="base">
            <CalendarHead changeDate={this.changeDate} />
            <CalendarBody
              date={this.state.date}
              selectDays={this.selectDays}
              selectedDays={this.state.selectedDays}
              notes={this.state.notes}
            />
          </div>
            <Component
              date={this.state.noteDate}
              showForm={this.state.showForm}
              addNote={this.addNote}
              deleteAllNotes={this.deleteAllNotes}
            />
        </>
      );
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
          return this.setState({
            showForm: !this.state.showForm,
            noteDate: day,
          });
      }
      this.setState(({ selectedDays }) => ({
        selectedDays: [...selectedDays, day],
      }));
    };

    addNote = (notes) => {
      this.setState({ showForm: false, notes: notes });
    };

    deleteAllNotes = () => {
      this.setState({ selectedDays: [] });
    };
  }
  return <Calendar />;
}





export default Calendar;
