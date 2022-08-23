

import React, { Component } from 'react';

export class INDIA extends Component {
    state = {
        flagImg: 'https://raw.githubusercontent.com/MeRahulAhire/intl-tel-code-select/master/phone_icon.png',
        countryCodeValue: '',
        phone: ''
    };
    selectCountryHandler = (e) => {
        this.setState({ countryCodeValue: e.target.value });
    };
    phoneHandler = (e) => {
        this.setState({ phone: e.target.value });
    };
    countryFlagHandler = () => {
        const select = document.querySelector('#country');
        this.setState({
            flagImg: `https://flagpedia.net/data/flags/h80/${select.selectedOptions[0].dataset.countrycode.toLowerCase()}.webp`
        });
    };

    render() {
        return (
            <div className="page">
                <div className="container">
                    <h1 className="heading">Tele-Code</h1>
                    <div className="tel-box">
                        <div className="select-box" onChange={this.countryFlagHandler}>
                            <img src={this.state.flagImg} alt="country-flag" id="img" className="flag-img" />
                            <select
                                id="country"
                                onChange={this.selectCountryHandler}
                                defaultValue={this.state.countryCodeValue}
                            >
                                <option value="" hidden>
                                    Select Country
                                </option>

                                <option data-countryCode="BY" value="375">
                                    Belarus (+375)
                                </option>
                                <option data-countryCode="RU" value="7">
                                    Russia (+7)
                                </option>
                                <option data-countryCode="UA" value="380">
                                    Ukraine (+380)
                                </option>

                                <option data-countryCode="PL" value="48">
                                    Poland (+48)
                                </option>
                                <option data-countryCode="LV" value="371">
                                    Latvia (+371)
                                </option>
                                <option data-countryCode="LT" value="370">
                                    Lithuania (+370)
                                </option>


                            </select>
                        </div>
                        <input
                            type="tel"
                            placeholder="945 678 0391"
                            className="tel"
                            onChange={this.phoneHandler}
                            defaultValue={this.state.phone}
                        />
                    </div>
                    <div className="output">
                        <h2>Phone no:</h2>
                        <span className="result">
                            +{this.state.countryCodeValue}
                            {this.state.phone}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default INDIA;

