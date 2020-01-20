import React from "react";
// eslint-disable-next-line
import ReactDom from "react-dom";

class Item extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="item-box">
        <img src={this.props.img} alt="" />
        <p>{this.props.title}</p>
        <p>Price: {this.props.price} $</p>
        <div className="buy-item-container">
          <button
            onClick={() =>  {
              this.props.handleRemoveFromChart(this.props.id);
            }}
          >
            -
          </button>
          <input type="number" value={this.props.count} readOnly></input>
          <button
            onClick={() =>  {
              this.props.handleAddToChart(this.props.id);
            }}
          >
            +
          </button>
  
        </div>
          <p> Total price: {this.props.total} $</p>

        
      </div>
    );
  }
}

export default Item;
