import React from "react";

export class PhoneInput extends React.Component {
    state = {
        number: "",
        showTheList: false,
        value: "Беларусь",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAABt0lEQVRIS2Ps4uevYGZjr/+aX8nGwMDAwDOpE0QxfHv18iWYQSPAysDwSpzhfzBjr6jYd0ZGJrYveeVgq+jlAJBdIEcwNrX0/wVxwo7vf8nw/z+D7Lp1YIdc5wAHCM3ADqjJCAcc2wcOcro7oE9MAhwC6Y8egx3wODiYARQSX7ZtoZnvQQbDQwDDAUFBYIvp5oDRNIAeBaDgfz93DsOL7Cw6p4EHD18yMDExvJs+jeFtZyfDnxfP6eOAFZ7+fxXPnmQQi4t/ySIlyfC2q4tBMC2d4XVTA30cAEqEqscOMmieOwXOhvwREQxi7Z0M1znpWBApnj3BoHv8MNgBgpmZDCLlFfQrCRcHhv9VO3qQQcDW9iWHri7D+xkzGAQzsxhe19fSJwpguSDtxq2XjFycDG86OxneT59Gv0SILRuCHEG3EGiaOPcZuDbctRFcB8AqI+6FrDSNAoYzEOMZ4Q7YuQEsQHcH9EtIgUMg7cFDsANgtaGG/2b6hACGA6C1Id0cMJoG+iWkLjIwMIh+rmwGxzlvO6QAKvQFJw3aAlaG54wTpKRc//9j6P1c2SxCVwewMjxnEGIIAwCfu+ioy0e8vgAAAABJRU5ErkJggg==",
        mask: "XXXX (XX) XXX-XX-XX",
        count: 13,
    };
    inputs = [
        {
            value: "Беларусь",
            code: "+375",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAABt0lEQVRIS2Ps4uevYGZjr/+aX8nGwMDAwDOpE0QxfHv18iWYQSPAysDwSpzhfzBjr6jYd0ZGJrYveeVgq+jlAJBdIEcwNrX0/wVxwo7vf8nw/z+D7Lp1YIdc5wAHCM3ADqjJCAcc2wcOcro7oE9MAhwC6Y8egx3wODiYARQSX7ZtoZnvQQbDQwDDAUFBYIvp5oDRNIAeBaDgfz93DsOL7Cw6p4EHD18yMDExvJs+jeFtZyfDnxfP6eOAFZ7+fxXPnmQQi4t/ySIlyfC2q4tBMC2d4XVTA30cAEqEqscOMmieOwXOhvwREQxi7Z0M1znpWBApnj3BoHv8MNgBgpmZDCLlFfQrCRcHhv9VO3qQQcDW9iWHri7D+xkzGAQzsxhe19fSJwpguSDtxq2XjFycDG86OxneT59Gv0SILRuCHEG3EGiaOPcZuDbctRFcB8AqI+6FrDSNAoYzEOMZ4Q7YuQEsQHcH9EtIgUMg7cFDsANgtaGG/2b6hACGA6C1Id0cMJoG+iWkLjIwMIh+rmwGxzlvO6QAKvQFJw3aAlaG54wTpKRc//9j6P1c2SxCVwewMjxnEGIIAwCfu+ioy0e8vgAAAABJRU5ErkJggg==",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Украина",
            code: "+380",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAkElEQVRIS2Nk8JstzvKfcc9/BgYdBjoCRgaGK38Y/7swsvjOuUxvy2H+BDmCkdl3zn+QgKa5Kx39z8Bw/eRusH2jDhgNgdEQGA2BgQ+BUw0M4JLQ1JuRriXh6a1gaxkYRx0wGgKjITAaAoMhBC4z0LlFDC9yGRnOM55oZRBn+s2wj4GBQYuuZTEjw/l/LAyeAIt/eV49symwAAAAAElFTkSuQmCC",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Россия",
            code: "+7",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAo0lEQVRIS2PcuO+I+u07D/d/+/5DkoGOgIuT47mqirwjY8+spc/obTnMnyBHMDZNnPsfJFCcHkdH/zMw9M5cBLZv1AGjITDwIcCoWf+fhZWNwcotnq654NDW2ZBcMOqA0RAYDYEBD4HlAgzg2tBaRoKu5cDRJy8g5cCoA0ZDYDCEwGUGBgYdumYBhGXnGZdxM4gzsTHs+/+fQYvOjjj//zeDJwBxf34P7r+YUwAAAABJRU5ErkJggg==",
            mask: "XX (XXX) XXX-XX-XX",
            count: 12,
        },
        {
            value: "Польша",
            code: "+48",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAlklEQVRIS2PcuO+I+u07D/d/+/5DkoGOgIuT47mqirwjY8+spc/obTnMnyBHMDZNnPsfJFCcHkdH/zMw9M5cBLZv1AGjITAaAqMhMPAhMJmBAVwSeqlK07Uk3Hb7KaQkHHXAaAiMhsBoCAx4CMxkZnr26+8/uraIYUUuOzPTE8aNvLzqL759PfDr7z8JepbFIMvFubhdABr9hiLY/1hmAAAAAElFTkSuQmCC",
            mask: "XXX XXX-XXX-XXX",
            count: 12,
        },
        {
            value: "Литва",
            code: "+370",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAYklEQVRYR2NkGGDAOMD2M4w6YDQEGD9sUw8ZyITI+HG7xv9RB4yGwICGwJ31OgObCPVy3EcdMBoCIzwEFqpbDGwIbJA3G3XAaAgMbAhMjTDfMqC14UBaDrJ7tFk+GgIDHgIAmVcsLny2L4UAAAAASUVORK5CYII=",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Латвия",
            code: "+371",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAi0lEQVRIS2PsZhf0Zfz3bzYDI6M4Az3B//8v/zMxpTL2sPK/oLvlMI/+//+SsYdN4D+I76quSU//M+y+eR1s36gDRkNgNAQGPgSaJs79z87OxpAaHUrXcmDKvKWQcmDUAQMeAqN1wWgIjIbAaAgMaKOUgeEZI7hZzvBvDsN/RjG61kYMDM/+MzJmAABXiXXUUZYtcAAAAABJRU5ErkJggg==",
            mask: "XXXX XXXX-XXXX",
            count: 12,
        },
    ];
    theList() {
        return (
            <ul>
                {this.inputs.map((item) => {
                    return (
                        <li
                            onClick={() =>
                                this.setState({
                                    number: item.code,
                                    showTheList: false,
                                    img: item.img,
                                    mask: item.mask,
                                    count: item.count,
                                })
                            }
                        >
                            {item.value}
                            <div className="list-right">
                                {item.code}
                                <img
                                    src={item.img}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }

    handleNumberChange = (e) => {
        this.setState(
            {
                number: e.target.value,
            },
            () => {
                this.inputs.forEach((item) => {
                    if (this.state.number === item.code)
                        this.setState({
                            value: item.value,
                            img: item.img,
                            mask: item.mask,
                            count: item.count,
                        });
                });

                if (this.state.count === this.state.number.length) {
                    let maskArr = this.state.mask.split(""),
                        numberArr = this.state.number.split("");
                    for (let i = 0, j = 0; i < maskArr.length; i++)
                        if (maskArr[i] === "X") {
                            maskArr[i] = numberArr[j];
                            j++;
                        }
                    let number = maskArr.join("");
                    this.setState({ number: number });
                }
            }
        );
    };
    render() {
        return (
            <>
                <label className="phone-input">
                    <img
                        src={this.state.img}
                        style={{
                            height: "20px",
                            width: "30px",
                        }}
                    />
                    <input
                        onClick={() =>
                            this.setState({ showTheList: !this.state.showTheList })
                        }
                        id="number"
                        type="tel"
                        name="myPhone"
                        placeholder="+375 (33) 000-00-00"
                        value={this.state.number}
                        onChange={this.handleNumberChange}
                        maxLength={this.state.count}
                    />
                </label>
                {this.state.showTheList ? this.theList() : null}
            </>
        );
    }
}