import React from "react";
import "./App.css";
import { storeProducts } from "./data.js";
import Item from "./Item.js";
import Logo from "./logo.svg";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       items: storeProducts, 
       total: 0,
      };
    this.handleAddToChart = this.handleAddToChart.bind(this);
    this.handleRemoveFromChart = this.handleRemoveFromChart.bind(this);
  }
  handleAddToChart(id) {
    this.setState(function(prevState) {
      prevState.items.forEach(item => {
        if (item.id === id) {
          item.count++;
          item.total = item.count * item.price;
          prevState.total += item.price;
        }
      });
      return prevState;
    });
  }
  handleRemoveFromChart(id){
    this.setState(function(prevState) {
      prevState.items.forEach(item => {
        if (item.id === id && item.count > 0) {
          item.count--;
          item.total = item.count * item.price;
          prevState.total -= item.price;
        }
      });
      return prevState;
    });
  }
  render() {
    var Items = this.state.items.map(item => (
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        img={item.img}
        price={item.price}
        company={item.company}
        inCart={item.inCart}
        count={item.count}
        total={item.total}
        handleAddToChart={this.handleAddToChart}
        handleRemoveFromChart={this.handleRemoveFromChart}
      />
    ));
    return (
      <div className="App">
        <nav className="header">
          <img src={Logo} alt="" />
          <h3>Products</h3>
          <h3>Cart total: <span>{this.state.total}$</span></h3>
          <div>
          <img src="img/cart.png" alt="img here" ></img>
          </div>
        </nav>
        <div className="items-container">{Items}</div>
        <footer><p>by gogomor</p></footer>
      </div>
    );
  }
}

export default App;
