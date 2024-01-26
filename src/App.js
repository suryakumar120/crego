import React from 'react';
import { useState } from 'react';
import './app.css';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import delete_img from './assets/x-mark_1617543.png'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedConnector: 'and',
      expressions: JSON.parse(localStorage.getItem('expressions')) || [],
    }
  }
  componentDidMount() {
    const storedExpressions = localStorage.getItem('expressions');
    if (storedExpressions) {
      this.setState({
        expressions: JSON.parse(storedExpressions),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('expressions', JSON.stringify(this.state.expressions));
  }
  handleConnectorSelect = (connector) => {
    this.setState({ selectedConnector: connector.target.value })
  }
  handleAddExpression = (e) => {
    e.preventDefault();
    const expression = {
      key: e.target.elements.key.value,

      operator: e.target.elements.operator.value,
      value: e.target.elements.value.value,
      score: e.target.elements.score.value,

    }
    console.log(expression.key);
    // this.state.expressions.map(({expression})=>{
    //    console.log(expression);
    // })
    console.log(this.state.expressions);
    this.setState((prevState) => ({ expressions: [...prevState.expressions, expression] })
    )



  }
  handleDeleteExpression = (index) => {
    var filteredItems = this.state.expressions.filter(function (item, id) { return index !== id });
    this.setState((prevState) => ({
      expressions: filteredItems,
    }
    ))
  }
  handleGenerateOutput = () => {

  }
  render() {
    const expression_list = this.state.expressions.map((items, index) => (
    <li className='expression_item'>    
          <div>key: {items.key}</div>
          <div>operator: {items.operator}</div>
          <div>value: {items.value}</div>
          <div>score: {items.score}</div>    
                 <img className='delete_img' src={delete_img} alt='..' onClick={() => this.handleDeleteExpression(index)}/></li>))
    const rules = this.state.expressions.map((items, index) => ({ "key": items.key, "output": { "operator": items.operator, "value": items.value, "score": items.score } }));
    // const combinator = { "cominator": this.state.selectedConnector };
    const output = { rules, combinator:this.state.selectedConnector };

    return (
      <div className="main_container">
        <p className='title'>Web Based Expression Engine</p>
        <div className='expression_engine_container'>
          <div className='input_area'>
            <div className='input_connector'>
              <p className='input_connector_sentence'>Please select the Input connector type:</p>
              <form className='input_form'>
                <label className='btn btn-light'><input type='radio' value="and" checked={this.state.selectedConnector === 'and'} onChange={this.handleConnectorSelect} />  AND</label>
                <label class='btn btn-light'><input type='radio' value="or" checked={this.state.selectedConnector === 'or'} onChange={this.handleConnectorSelect} />  OR</label>
              </form>

            </div>
            <div className="expressions">
              {expression_list}
              <form onSubmit={this.handleAddExpression} className='add_expression'>
                <label htmlFor='key' className='key' >
                  <p>Key  :  &nbsp;</p>
                  <select name='key'>
                    <option value="age">Age</option>
                    <option value="credit_score"> Credit Score</option>
                    <option value="account_balance"> Account Balance</option>
                  </select>
                </label>
                <label htmlFor='operator' className='operator'>
                  Operator :
                  <select name='operator'>
                    <option value=">"> Greater than</option>
                    <option value=">="> Greater than or equal to</option>
                    <option value="<"> less than</option>
                    <option value="<=g"> less than or equal to</option>
                    <option value="=">is equal</option>
                  </select>
                </label>
                <label htmlFor='value' className='value'>Value  : <input type='text' name='value' required/></label>
                <label htmlFor='score' className='score'>Score : <input type='text' name='score' required/></label>
                <button className=' btn btn-light add_expression_btn' type='submit' > Add expression</button>
              </form>

            </div>
          </div>
          <div className="output_area">
            <div className="output">
              <SyntaxHighlighter language='JSON' style={tomorrow}>
                  {JSON.stringify(output, null, 4)}
              </SyntaxHighlighter>
            
          </div>
          </div>


        </div>
      </div>
    )
  }
}

export default App;
