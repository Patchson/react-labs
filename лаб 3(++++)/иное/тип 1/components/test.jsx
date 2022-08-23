import React from "react";

class Test extends React.Component {
    constructor() {
		super();
		this.state = {items: [1, 2, 3, 4, 5], value: ''};
	}

	//Добавляем в конец списка новый пункт:
	addItem(event) {
		
		//Добавляем новый элемент в массив:
		this.state.items.push(this.state.value);
		
		//Применяем изменение:
		this.setState({items: this.state.items});
		
		//Отменяем отправку формы:
		event.preventDefault();
	}

	//Записываем value инпута в this.state.value:
	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {

		//Формируем набор из тегов li:
		const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});

		//По нажатию на кнопку вызываем addItem:
		return (
			<div>
				<ul>
					{list}
				</ul>
				
				<form onSubmit={this.addItem.bind(this)}>
					<input
						value={this.state.value}
						onChange={this.handleChange.bind(this)}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Test 