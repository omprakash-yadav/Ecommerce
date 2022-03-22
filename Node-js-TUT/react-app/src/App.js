import React, { Component } from 'react';
import NaveBar from "./Components/NaveBar"
import Counters from "./Components/Counters"
import './App.css';


class App extends Component {
  state={
         counters:[
             {id:1,value:3 },
             {id:2,value:0}, 
             {id:3,value:0},
             {id:4,value:0}
         ]

     };
    //  constructor(props){
    //    super(props)
    //    console.log("App-constructor",this.props)
    //  }
     handleIncriment=(counter)=>{
         const counters=[...this.state.counters]  //clonning of the counters Arry
         const index=counters.indexOf(counter)//The value to locate in the array.
                                                //Returns the index of the first occurrence of a value in an array.
         counters[index]={...counter}//clonning of the counter object
         counters[index].value++;
         this.setState({counters}); 
     };
     handleDecriment=(counter)=>{
      const counters=[...this.state.counters]  //clonning of the counters Arry
      const index=counters.indexOf(counter)
      counters[index]={...counter}//colnning of the counter object
      counters[index].value--;
      this.setState({counters})
       

     };

     handleReset=()=>{
         const Reset=this.state.counters.map(c=>{
             c.value=0;
             return 0;
            });
            this.setState({Reset});
     };

     handleDelete= counterId=>{  
        // console.log("Event Handler caller",counterId)
            
         const counters=this.state.counters.filter(c=>c.id !== counterId);
         this.setState({counters});
     };
  

  render() { 
   
    return (
    
      <div>
      <NaveBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}></NaveBar>
      <main className="container"></main>
      <Counters
      counters={this.state.counters}
      onIncriment={this.handleIncriment}
      onDecriment={this.handleDecriment}
      onReset={this.handleReset}
      onDelete={this.handleDelete}
      ></Counters>
      </div>
      
      );
  }
}
 
export default App;