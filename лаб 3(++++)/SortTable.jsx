import React from "react";

export class SortTable extends React.Component
{
   constructor(props) {
        super(props);
        this.sorted = { name: true, price: true, in_stock: true };
        this.state = {array: this.list};
    }

    list = [
        {
            name: "Butter",
            price: "0.9",
            in_stock: 99,
        },
        {
            name: "Cheese",
            price: "4.9",
            in_stock: 20,
        },
        {
            name: "Fancy French Cheese",
            price: "99",
            in_stock: 0,
        },
        {
            name: "Heavy Cream",
            price: "3.9",
            in_stock: 2,
        },
        {
            name: "Milk",
            price: "1.9",
            in_stock: 1,
        },
        {
            name: "Sour Cream",
            price: "2.9",
            in_stock: 3,
        },
        {
            name: "Yoghurt",
            price: "2.4",
            in_stock: 12,
        },
    ]

    head = [
        <tr>
            <td>№</td>
            <td className="name">
                <button className="name" onClick={() => this.sort("name")}>Name</button>
            </td>
            <td className="small">
                <button className="small" onClick={() => this.sort("price")}>Price</button>
            </td>
            <td className="small">
                <button className="small" onClick={() => this.sort("in_stock")}>In Stock</button>
            </td>
        </tr>,
    ];

    sort(byWhat) {
        let direction = this.sorted[byWhat] ? 1 : -1,
            goodsCopy = [...this.list].sort(function (a, b) {
                if (a[byWhat] > b[byWhat]) {
                    return direction;
                }
                if (a[byWhat] < b[byWhat]) {
                    return direction * -1;
                }
                return 0;
            });
        this.sorted[byWhat] = !this.sorted[byWhat];
        this.setState({ array: goodsCopy });
    }

    table ()  {
        let stringNumber = 0;
        return this.state.array.map((item)=>{
            return(
                <tr>
                    <td>{++stringNumber}</td>
                    <td className="name">{item.name}</td>
                    <td className="small">{item.price}</td>
                    <td style={{ background: (item.in_stock) === 0 ? "red" : (item.in_stock) < 3 ? "yellow" : "white" }}>
                    {item.in_stock}</td>
                </tr>
            );
        })
    };

    render() {
        return (
            <table>
                {this.head}
                {this.table()}
            </table>
        );

    }
}