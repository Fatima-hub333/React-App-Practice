import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // Main div that cover the whole calculator area/body
      <div className="calculator disflex">
        {/* Area of solution after using functions or click buttons */}
        <div className="solution">
          <span>0</span>
        </div>
        {/* Display buttons div start */}
        <div className="btn-display disflex">
          <div className="operators">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="two-btn">0</button>
            <button type="button">.</button>
          </div>
          {/* Display buttons part finish */}

          {/* Sidebar buttons area start */}
          <div className="orange-btn">
            <button type="button">/</button>
            <button type="button">*</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="button">=</button>
          </div>
          {/* Sidebar area buttons finish */}
        </div>
      </div>
    );
  }
}

export default Calculator;
