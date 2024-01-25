import React from 'react';
import { useState } from 'react';
class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        selectedConnector:'and',
      expressions:[{key
        : 
        "credit_score",
        object
        : 
        {operator
        : 
        ">=",
        score
        : 
        "33",
        value
        : 
        "12"}}],
      }
    }
    handleConnectorSelect =(connector)=>{
        this.setState({selectedConnector: connector.target.value})
    }
    handleAddExpression = (e) =>{
      e.preventDefault();
      const expression = {
        key: e.target.elements.key.value,
        object:{
          operator:e.target.elements.operator.value,
          value:e.target.elements.value.value,
          score:e.target.elements.score.value,
        }
      }
      console.log(expression.key);
      // this.state.expressions.map(({expression})=>{
      //    console.log(expression);
      // })
      console.log(this.state.expressions);
      this.setState((prevState) =>({expressions : [...prevState.expressions,expression]})
      )
      

      
    }
    render(){
      const expression_list = this.state.expressions.map((items)=>(<li>key:{items.key} operator:{items.operator} value:{items.value} score:{items.score}</li>))
      return (<div className='main_container'>
          
          <div className="input_connector">Please select the Input connector type: 
             <form>
                <label><input type='radio' value="and" checked={this.state.selectedConnector === 'and'} onChange={this.handleConnectorSelect}/>AND</label>
                <label><input type='radio' value="or" checked={this.state.selectedConnector === 'or'} onChange={this.handleConnectorSelect}/>OR</label>

             </form>
          
          </div>
          <div className="expressions">
             <ul>{expression_list}</ul>
            <form onSubmit={this.handleAddExpression}>
               <label htmlFor='key' >
                 Select Key :  
                 <select name='key'>
                  <option value="age">Age</option>
                  <option value="credit_score"> Credit Score</option>
                  <option value="account_balance"> Account Balance</option>
                 </select>
               </label>
               <label htmlFor='operator'>
                 Select Operator : 
                 <select name='operator'>
                  <option value=">"> Greater than</option>
                  <option value=">="> Greater than or equal to</option>
                  <option value="<"> less than</option>
                  <option value="<"> less than or equal to</option>
                  <option value="=">is equal</option>
                 </select>
               </label>
               <label htmlFor='value'> Value:<input type='text' name='value' /></label>
               <label htmlFor='score'>Score : <input type='text' name='score'/></label>
               <button className= 'add_expression' type='submit' > Add expression</button>
            </form>
            
          </div>



      </div>)
    }
}

export default App;
