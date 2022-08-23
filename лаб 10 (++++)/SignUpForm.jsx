import React from "react";
import PropTypes from "prop-types";
import { PhoneInput } from "./PhoneInput";
import { SignUpEmailInput } from "./SignUpEmailInput";
import { SignUpPasswordInput } from "./SignUpPasswordInput";
import './SignUpForm.css';

export class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disableBtn: false,
            disableEmail: true
        }
    }
    
    inputHandle = (e) => {
        let check = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
            checked = check.test(e.target.value);
        if (checked===false) this.setState({disableBtn:true})
        else {
            this.setState({disableBtn:false})
        }
    };

    disableBtn = (value) => {
        this.setState({disableBtn: value})
        return this.state.disableBtn
    }
    disableEmail = (value) => {
        this.setState({disableEmail: value})
        return this.state.disableEmail
    }

    onSubmit() {
        alert("Принято!");
    }

    day() {
        let days = []
        for (let day = 1; day < 32; day++) {
            days.push(
                <option key={day}>{day}</option>
            )
        }
        return (
            <select>
                {days}
            </select>
        )
    }
    month() {
        let months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ]
        return (
            <select>
                {months.map(month => {
                    return <option key={month}>{month}</option>
                })}
            </select>
        )
    }
    year() {
        let years = []
        for (let year = 1900; year < 2022; year++) {
            years.push(
                <option key={year}>{year}</option>
            )
        }
        return (
            <select>
                {years}
            </select>
        )
    }

    str = "text";
    num = 1;

    // static PropTypes = {
    //     children: PropTypes.element, 
    // }

    // static defultProps = {
    //     children: null,
    // }

    render() {
        const { children } = this.props
        return (
            <form>
                <input type="text" placeholder="Фамилия" onInput={this.inputHandle} />
                <input type="text" placeholder="Имя" onInput={this.inputHandle} />
                <input type="text" placeholder="Отчество" onInput={this.inputHandle} />
                <div className='rad'>
                    М <input type="radio" name="sex" value="male" />
                    Ж <input type="radio" name="sex" value="female" />
                </div>
                <SignUpEmailInput 
                    disableBtn={this.disableEmail} 
                    months={this.months}
                    str={this.str}
                    num={this.num}
                />
                <SignUpPasswordInput disableBtn={this.disableBtn} />
                <div >
                    {this.day()}
                    {this.month()}
                    {this.year()}
                </div>
                <br />
                <PhoneInput />
                <br />
                <button disabled={this.state.disableBtn + this.state.disableEmail} onClick={this.onSubmit}>Отправить</button>
            </form>
        )
    }
}

// SignUpEmailInput.PropTypes = {
//     disableBtn: PropTypes.func.isRequired,
//     months: PropTypes.object,
//     str: PropTypes.string,
//     num: PropTypes.number
// }

