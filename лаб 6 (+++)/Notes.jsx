import React from "react";

export class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date: "",
            desc: "",
            notes: [],
        };
    }
    titleHandle = (e) => {
        this.setState({ title: e.target.value });
    };

    dateHandle = (e) => {
        this.setState({ date: e.target.value });
    };

    descHandle = (e) => {
        this.setState({ desc: e.target.value });
    };

    addNote = () => {
        this.setState({
            notes: [
                ...this.state.notes,
                {
                    title: this.state.title,
                    date: this.state.date,
                    desc: this.state.desc,
                },
            ],
            title: "",
            date: "",
            desc: "",
        });
    };

    deleteFirst = () => {
        this.setState({notes: this.state.notes.slice(1, this.state.notes.length)}) // slice() - возвращает новый массив, содержащий копию части исходного массива.
    }

    deleteLast = () => {
        this.setState({notes: this.state.notes.slice(0, this.state.notes.length-1 )})
    }

    style(length) {
        if (length > 7) {
            return { background: "red" };
        }
        return { background: "yellow" };
    }

    render() {
        let length = 0;
        return (
            <> 
                <form> 
                    <input
                        type="text"
                        placeholder="Заголовок"
                        onChange={this.titleHandle}
                        value={this.state.title}
                    />
                    <input
                        type="date"
                        placeholder="Дата"
                        onChange={this.dateHandle}
                        value={this.state.date}
                    />
                    <textarea
                        placeholder="Записка"
                        onChange={this.descHandle}
                        value={this.state.desc}
                    />
                </form>
                <button onClick={this.addNote}>Добавить</button>
                {this.state.notes.length > 3 && (
                    <>
                        <button onClick={this.deleteFirst}>delete first</button>
                        <button onClick={this.deleteLast}>delete last</button>
                    </>
                )}
                {this.state.notes.map((item) => {
                    length++;
                    return (
                        <div key={item.title} className="notes" style={this.style(length)}>
                            {length > 7 && (
                                <p>{ "Too much notes"}</p>
                            )}
                            <h3>{item.title}</h3>
                            <h4>{item.date}</h4>
                            <p>{item.desc}</p>
                        </div>
                    );
                })}
            </>
        );
    }
}