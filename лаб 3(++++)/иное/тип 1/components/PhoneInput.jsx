import React, { useState } from "react";
// import "../styles/PhoneInput.css";

class PhoneInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            country_code: '+375',
            number: '000000000',
        }
        this.country_codes = [
            {"name":"Belarus"  ,"code":'+375'  ,"code_len": 2, "max_len": 13},
            {"name":"Russia"   ,"code":'+7'    ,"code_len": 3, "max_len": 12},
            {"name":"Ukraine"  ,"code":'+380'  ,"code_len": 2, "max_len": 13},
            {"name":"Poland"   ,"code":'+48'   ,"code_len": 0, "max_len": 12},
            {"name":"Litva"    ,"code":'+370'  ,"code_len": 2, "max_len": 13},
            {"name":"Latvia"   ,"code":'+371'  ,"code_len": 0, "max_len": 12},
        ]
        this.country_code_options = this.country_codes.map((code) =>
        <option key={code["name"]} value={code["code"]}>
            {code["name"]} ({code["code"]})
        </option>
        )
    }

    change_country(e){
        this.setState({country_code: e.target.value.substring(1,3)})
    }

    change_number(event) {
        this.setState({country_code: event.target.value});
    }

    alert_number(e){
        alert(this.state.country_code + " (" + e.target.value.substring(4, 6) + ") " + this.state.number.substring(6,this.state.number.length))
    }

    render(){
        return (
        <div className="inputPlace">
            <h1>{this.state.country_code}</h1>
            <select onChange={(e) => this.change_country(e)}>
                {this.country_code_options}
            </select>
            <input
                type="tel"
                maxLength="13"
                pattern="^[ 0-9]+$"
                value={this.state.country_code}
                onChange={this.change_number.bind(this)}
            />
            <button onClick={(e) => this.alert_number(e)}>Подтвердить номер</button>
        </div>  
        )
    }
}

export default PhoneInput