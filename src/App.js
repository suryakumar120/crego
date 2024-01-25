import React from 'react';
import { useState } from 'react';
import './app.css';
class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        selectedConnector:'and',
      expressions:JSON.parse(localStorage.getItem('expressions')) || [],
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
    handleConnectorSelect =(connector)=>{
        this.setState({selectedConnector: connector.target.value})
    }
    handleAddExpression = (e) =>{
      e.preventDefault();
      const expression = {
        key: e.target.elements.key.value,
        
          operator:e.target.elements.operator.value,
          value:e.target.elements.value.value,
          score:e.target.elements.score.value,
        
      }
      console.log(expression.key);
      // this.state.expressions.map(({expression})=>{
      //    console.log(expression);
      // })
      console.log(this.state.expressions);
      this.setState((prevState) =>({expressions : [...prevState.expressions,expression]})
      )
      

      
    }
    handleDeleteExpression = (index) =>{
      var filteredItems = this.state.expressions.filter(function(item,id){ return index!==id});
        this.setState((prevState) =>({
          expressions:filteredItems,
        }
        ))
    }
    handleGenerateOutput = () =>{

    }
    render(){
      const expression_list = this.state.expressions.map((items,index)=>(<li className='expression_item'>key:{items.key} operator:{items.operator} value:{items.value} score:{items.score} <button className='delete_btn'onClick={()=>this.handleDeleteExpression(index)}>Delete</button></li>))
      const rules = this.state.expressions.map((items,index)=>({"key":items.key,"output":{"operator":items.operator,"value":items.value,"score":items.score}}));
      const combinator = {"cominator":this.state.selectedConnector};
      const output = {rules ,combinator};

      return (
      <div className="main_container">
        <div className='expression_engine_container'>
          
          <div className="input_connector">Please select the Input connector type: 
             <form>
                <label><input type='radio' value="and" checked={this.state.selectedConnector === 'and'} onChange={this.handleConnectorSelect}/>AND</label>
                <label><input type='radio' value="or" checked={this.state.selectedConnector === 'or'} onChange={this.handleConnectorSelect}/>OR</label>

             </form>
          
          </div>
          <div className="expressions">
             {expression_list}
            <form onSubmit={this.handleAddExpression} className='add_expression'>
               <label htmlFor='key' className='key' >
                 Key :  
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
                  <option value="<"> less than or equal to</option>
                  <option value="=">is equal</option>
                 </select>
               </label>
               <label htmlFor='value'> Value:<input type='text' name='value' /></label>
               <label htmlFor='score'>Score : <input type='text' name='score'/></label>
               <button className= 'add_expression_btn' type='submit' > Add expression</button>
            </form>
            
          </div>
          <div className="output">
              {JSON.stringify(output,null,4)}
          </div>


      </div>
      </div>
      )
    }
}

export default App;
