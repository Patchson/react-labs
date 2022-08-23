import React from "react";
import "../styles/PhoneInput.css";

class NumperInputOld extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            country_code: '+375',
            number: '000000000',
        }
        
        this.county_codes = [
            {"name":'Belarus'   ,"code":'+375'    ,"code_len": 2},
            {"name":"Russia"    ,"code":'+7'      ,"code_len": 3},
            {"name":"Ukraine"   ,"code":'+380'    ,"code_len": 2},
            {"name":"Poland"    ,"code":'+48'     ,"code_len": 0},
            {"name":"Litva"     ,"code":'+370'    ,"code_len": 2},
            {"name":"Latvia"    ,"code":'+371'    ,"code_len": 0},
        ]
        this.selected_code = this.county_codes[0]
        this.country_code_options = this.county_codes.map((code) => 
        <option key={code["name"]} value={code["code"]}>
            {code["name"]} {code["num"]}
        </option>)

    }

    chacge_country_code(e){
        this.state.country_code = e.target.value
        e.target.nextSibling.innerHTML = this.state.country_code
    }

    change_number(e){
        if (e.target.value.charAt(0) == "+"){
            for (let i = 0; i <= this.country_code_options.length; i++){
                if (e.target.value == this.county_codes[i]["code"]){
                    this.selected_code = this.county_codes[i]["code"];
                    e.target.value = "";
                    this.state.country_code = this.selected_code;
                    e.target.previousSibling.innerHTML = this.state.country_code
                    e.target.previousSibling.previousSibling.value = this.state.country_code
                }
            }
            
        }
        else{
            this.state.number = e.target.value
        }
        
    }

    alert_number(e){
        alert(this.state.country_code +" (" + this.state.number.substr(0, 2) + ") " + this.state.number.substr(2, this.state.number.length))
    }

    render(){
    return (
    <div className="inputPlace">
        <select className="flow" onChange={(e) => this.chacge_country_code(e)}>
            {this.country_code_options}
        </select>
        <span>
            {this.state.country_code}
        </span>
        <input maxLength="9" type="text" placeholder="445693622" onChange={(e) => this.change_number(e)}/>
        <button onClick={(e) => this.alert_number(e)}>Подтвердить номер</button>
    </div>
    ) 
    }
}

export default NumperInputOld