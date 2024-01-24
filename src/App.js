import React from 'react';
import { useState } from 'react';
class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        selectedConnector:'and',
      expressions:[{"key" :"","object":{"operator":"","score":"","value":""}}],
      }
    }
    handleConnectorSelect =(connector)=>{
        this.setState({selectedConnector: connector.target.value})
    }
    handleAddExpression = (e) =>{
      e.preventDefault();
      // console.log(this.expressions);
      const expression = {
        key: e.target.key.value,
        // object:{
        //   operator:e.target.operator.value,
        //   "value":e.target.value.value,
        //   "score":e.target.score.value,
        // }
      }
      this.state.expressions.map(({i})=>{
         console.log(i);
      })
      this.setState((prevState)=>({
         expressions : [...prevState.expressions , expression],
      }))
      

      
    }
    render(){
      return (<div className='main_container'>
          
          <div className="input_connector">Please select the Input connector type: 
             <form>
                <label><input type='radio' value="and" checked={this.state.selectedConnector === 'and'} onChange={this.handleConnectorSelect}/>AND</label>
                <label><input type='radio' value="or" checked={this.state.selectedConnector === 'or'} onChange={this.handleConnectorSelect}/>OR</label>

             </form>
          
          </div>
          <div className="expressions">
            { this.state.expressions.map(({expression})=>{{
                {/* <p>Key: {expression.key} operator: {expression.operator} score:{expression.score} value:{expression.value}</p> */}
                // <p>key: {expression.key}</p>
            }})}
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
