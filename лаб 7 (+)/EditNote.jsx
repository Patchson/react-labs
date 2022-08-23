import React from "react";

export class EditNote extends React.Component {
    onSubmit = (e) => {
      e.preventDefault();
      let note = {
        title: this.state.title,
        date: this.props.note.date,
        desc: this.state.desc,
      };
      this.props.edit(this.props.note, note);
    };
    handle = (target, e) => {
      this.setState({ [target]: e.target.value });
    };
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Заголовок"
            onChange={this.handle.bind(this, "title")}
            defaultValue={this.props.note.title}
          />
          <input
            type="text"
            placeholder="Дата"
            readOnly
            defaultValue={this.props.note.date}
          />
          <textarea
            placeholder="Заметка"
            onChange={this.handle.bind(this, "desc")}
            defaultValue={this.props.note.desc}
          />
          <input type="submit" value="submit" />
        </form>
      );
    }
  }