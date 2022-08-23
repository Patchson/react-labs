import React from "react";

export class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Fullname: "Кузнецов Кирилл Юрьевич",
            birthDate: "09.07.2004",
            uniYear: "2021",
            faculty: "IT",
            group: "2",
            speciality: "ISIT",
            email: "mikevasovski@gmail.com",
            phoneNumber: "80337865432",
        };
    }
    render() {
        return(
            this.props.render(this.state)
        )
    }
}