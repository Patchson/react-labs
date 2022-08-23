import NumperInputOld from './components/NumperInputOld';
import PhoneInput from './components/PhoneInput';
import SortTable from './components/SortTable';
import Test from './components/test';
function App() {
  const table_data = [
    {"name": "Butter",                "price": 0.9,   "inStock": 99,    'id': 1},
    {"name": "Cheese",                "price": 4.9,   "inStock": 3,    'id': 2},
    {"name": "Fancy French Cheese",   "price": 99,    "inStock": 1,    'id': 3},
    {"name": "Heavy Cream",           "price": 3.9,   "inStock": 0,     'id': 4},
    {"name": "Milk",                  "price": 1.9,   "inStock": 2,    'id': 5},
    {"name": "Sour Cream",            "price": 2.9,   "inStock": 86,    'id': 6},
    {"name": "Yoghurt",               "price": 2.4,   "inStock": 12,    'id': 7},
  ]
  return (
    <div className="App">
      {/* <PhoneInput/> */}
      <SortTable data={table_data}/>
      {/* <Test/> */}
      <NumperInputOld/>
    </div>
  );
}

export default App;
