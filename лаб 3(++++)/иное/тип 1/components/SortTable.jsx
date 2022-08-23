import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import '../styles/SortTable.css'

class SortTable extends React.Component {
    constructor(props){
        super(props);
        this.data = props.data
        this.sorted = {
            "name": false,
            "price": false,
            "stock": false,
            "id": false
        }
        this.state = {
            "sorted_data": props.data
        }
    }

    id_sort(e) {
        if(this.sorted.id){
            this.setState({"sorted_data": this.data.sort(function (a,b){return a["id"] - b["id"]})})
            this.sorted = {
                "id": false
            }
        } else {
            this.setState({"sorted_data": this.data.sort(function (a,b){return a["id"] - b["id"]}).reverse()})
            this.sorted = {
                "id": true
            }
        } 
    }

    stock_sort(e){
        if (this.sorted.stock){
            this.setState({"sorted_data": this.data.sort(function (a, b){return a["inStock"] - b["inStock"]})})
            this.sorted = {
                "stock": false
            }
            
        } else {
            this.setState({"sorted_data": this.data.sort(function (a, b){return a["inStock"] - b["inStock"]}).reverse()})
            this.sorted = {
                "stock": true
            }
            
        }
        
    }

    price_sort(e){
        if (this.sorted.price){
            this.setState({"sorted_data": this.data.sort(function (a, b){return b["price"] - a["price"]})})
            this.sorted = {
                "price": false
            }
            
        } else {
            this.setState({"sorted_data": this.data.sort(function (a, b){return b["price"] - a["price"]}).reverse()})
            this.sorted = {
                "price": true
            }
            
        }

    }

    name_sort(e){
        if (this.sorted.stock){
            this.setState({"sorted_data": this.data.sort(function (a, b){return b["name"] - a["name"]})})
            this.sorted = {
                "name": false
            }
            
        } else {
            this.setState({"sorted_data": this.data.sort(function (a, b){return b["name"] - a["name"]}).reverse()})
            this.sorted = {
                "name": true
            }
            
        }
    }

    render(){
        return (
            <table>
                <tr>
                    <td><button onClick={(e) => this.id_sort(e)}>ID</button></td>
                    <td><button onClick={(e) => this.name_sort(e)}>Name</button></td>
                    <td><button onClick={(e) => this.price_sort(e)}>Price</button></td>
                    <td><button onClick={(e) => this.stock_sort(e)}>Stock</button></td>
                </tr>
                {this.state.sorted_data.map(data => 
                <tr key={data["name"]}>
                    <td>{data["id"]}</td>
                    <td>{data["name"]}</td>
                    <td>{data["price"]}</td>
                    <td className={data.inStock >= 1 ? "yellow": 'red'}>
                        {data["inStock"]}
                    </td>
                </tr>)}
            </table>
        )
    }
}

export default SortTable