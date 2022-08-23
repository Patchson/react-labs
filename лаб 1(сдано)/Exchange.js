import React from "react";
/* 
Асоциативный массив - это массив, в котором обращение к значению осуществляется по ключу
При этом в качестве ключа используется не порядковый номер (индекс), 
а некоторая строка, которую мы устанавливаем сами.
Таким образом представить ассоциативный массив можно как набор пар «ключ-значение». 
При этом каждое значение связано с определённым ключом.
*/
let response = [{
    stock_name: "EFX",
    company_name: "Equifax Inc",
    price: 163.55,
    currency: "USD",
    change: "+9.03"
}, {
    stock_name: "IRM",
    company_name: "Iron Mountain Inc",
    price: 33.21,
    currency: "USD",
    change: "+1.42"
}, {
    stock_name: "NTAP",
    company_name: "NetApp Inc",
    price: 54.81,
    currency: "USD",
    change: "-6.01"
}, {
    stock_name: "CTL",
    company_name: "Centurylink Inc",
    price: 13.79,
    currency: "USD",
    change: "-1.37"
}]
const txtRed = {
color: 'red'
}
const txtGreen = {
color: 'green'
}
class Excange extends React.Component{
    render(){
        return(
            <div className="table">
                <table className="exchange" border="1" cellSpacing={"0px"} cellPadding={"4"}> 
                <tr>
                    <th>Тикер</th>
                    <th>Название компании</th>
                    <th>Цена</th>
                    <th>Валюта</th>
                    <th>Изменения</th>
                </tr>               
                {
/* 
map - это коллекция «ключ-значение», которую можно использовать для создания ассоциативных 
массивов. Map в отличие от объекта позволяет использовать в качестве ключей значения 
любых типов как примитивные, так и ссылочные.
*/
                response.map((response, index) => (    
                    <tr key={index}>
                        <td>{response.stock_name}</td>
                        <td>{response.company_name}</td>
                        <td>{response.price}</td>
                        <td>{response.currency}</td>
                        <this.Change query = {response}/>
                    </tr>
                    ))}
                </table>
            </div>
        );
    }
    Change(props) {
        const bh = props.query;
        //alert(bh.change);
        if(bh.change < 0)
        {
            return (<td style={txtRed}>{bh.change}</td>);
        }
        else
        {
            return (<td style={txtGreen}>{bh.change}</td>);
        }
    }
}
export default Excange;