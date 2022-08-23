import React, { Fragment, Component } from 'react';

const POSITIONS = [
    {
        id: 1,
        value: 'Автомеханик',
        description: 'Автомеханик - Выполняет операции по техническому обслуживанию и ремонту автотранспортных средств, проводит контроль технического состояния автомобилей.'             
    },
    {
        id: 2,
        value: 'Бухгалтер',
        description: 'Бухгалтер - Cоставляет отчетные калькуляции себестоимости продукции (работ, услуг), производит начисление и перечисление платежей в государственный бюджет'             
    },
    {
        id: 3,
        value: 'Гравер',
        description: 'Гравер - Выполняет операции по техническому обслуживанию и ремонту автотранспортных средств, проводит контроль технического состояния автомобилей.'             
    },
    {
        id: 4,
        value: 'Доменщик',
        description: 'Доменщик - Осуществляет работы по обслуживанию доменной печи и процессов доменного производства на различных его участках.'             
    },
    {
        id: 5,
        value: 'Инженер',
        description: 'Инженер - Принимает участие в производстве всех материальных благ общества - от продуктов питания и товаров повседневного спроса до сложных вычислительных машин и космических ракет.' 
    },
]

export class Job extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleSelect = ({target: {value}}) => {
        this.setState({
            text: value
        })
    }

    render() {
        return (
            <div>
                <select onChange={this.handleSelect}>
                    {
                        POSITIONS.map((item) => (
                            <option key={item.id} value={item.description}>{item.value}</option>
                        ))
                    }
                </select>
                <h2>{this.state.text}</h2>
            </div>
        )
    }
}

export default Job;