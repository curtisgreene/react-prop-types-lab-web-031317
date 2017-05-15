import React from 'react'

class Product extends React.Component {
  render() {
    return (
      <div>
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>Watermark: {this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: isWeightRight
}

Product.defaultProps = {
  hasWatermark: false
}

function isWeightRight(props, propName) {
  const weight = props[propName];
  if (!weight) {
    return new Error("You need to add a weight!")
  } else if (weight < 80 || weight > 300 ) {
    return new Error("Weight needs to be between 80 and 300 units")
  } else if ( typeof weight != 'number') {
    return new Error("Weight needs to be number")
  }
}

export default Product;
