import React from "react";
import { SortTable } from "./SortTable.jsx";
import './Catalog.css';
import { Search } from "./Search.jsx";


export class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.sortTableRef = React.createRef();
    this.state = { loaded: false, search: "", searchParameter: "partial"};
    this.sorted = { name: true, price: true, in_stock: true, discount: true };
}

componentDidMount() {
    this.setState({ loaded: true, array: this.sortTableRef.current.goods});
}

sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
    goodsCopy = [...this.state.array].sort(function (a, b) {
        if (a.new || b.new) {
            return 0
        }
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

sorts() {
  return (
    <div className="sorts">
      <button onClick={() => this.sort("name")}>
        Name
      </button>
      <button onClick={() => this.sort("price")}>
        Price
      </button>
      <button onClick={() => this.sort("in_stock")}>
        In Stock
      </button>
      <button onClick={() => this.sort("discount")}>
        Discount
      </button>
    </div>
  );
}

goods() {
    return [].concat(this.state.array)
        .sort((a,b) => a.new < b.new ? 1 : -1)
        .filter((item) => {
            if(!this.state.search) return item;
            switch (this.state.searchParameter) {
                case "partial":
                    if (
                        item.name.toLowerCase().includes(this.state.search.toLowerCase())
                    ) {
                        return item;
                    }
                    break;
                case "full":
                    if (
                        item.name.toLowerCase() === this.state.search.toLowerCase() 
                    ) {
                        return item;
                    }
                    break;
                    default: return item;
            }
        })
        .map((item) => {
            return (
                <div className="good" key={item.name}>
                    <div className="good_left">
                        <div className="good_discount">
                            {item.new && <h3>NEW</h3>}
                            <h3>{item.discount}%</h3>
                        </div>
                        <img src={item.img} alt=''/>
                    </div>
                    <div className="good_right">
                        <div className="good_name">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="good_price">
                            <h3>{item.price}Р</h3>
                            <h3>{item.discount && item.price - ((item.price / 100) * item.discount)}Р</h3>
                        </div>
                        <div className="good_stock">
                            <h4>В наличии - {item.in_stock}</h4>
                        </div>
                    </div>
                </div>
            )
    })
}
search = (item) => {
    this.setState({ search: item });
};
searchParameter = (item) => {
    this.setState({ searchParameter: item });
}
render() {
    return (
        <>
            <Search search={this.search} searchParameter={this.searchParameter}/>
            {this.state.loaded && this.sorts()}
            {this.state.loaded && this.goods()}
            <SortTable ref={this.sortTableRef} />
        </>
    );

}
}

// 170р       100% - 170р        10% - 17р
//            50% - 85р 