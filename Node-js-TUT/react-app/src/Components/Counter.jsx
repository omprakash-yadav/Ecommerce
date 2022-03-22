import React, { Component } from 'react';

class Counter extends Component {
    // state={
    // count:this.props.counter.value,
    // tags:["tag"]

    // };

    // handleIncrement = () =>{

    //     //console.log("product");
    //     this.setState({count: this.state.count + 1});

    // };
    // dohandleIncrement=()=>{
    //     this.handleIncrement(product)
    // };

    render() {

        return (<div>
            {this.props.children}
            <span className={this.getBadgeClasess()}>{this.formatCounter()}</span>
            <button
                onClick={() => this.props.onIncriment(this.props.counter)}
                className="btn btn-success btn-sm m-2">+</button>

            <button
                onClick={() => this.props.onDecriment(this.props.counter)}
                className="btn btn-success btn-sm m-2">-</button>

            <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm  m-2">DElete</button>

            {/* {this.state.tags.length===0 && "Please creat a tag"}
        {this.renderTags()} */}

        </div>);



    }
    // renderTags(){
    //     if(this.state.tags.length===0)
    //     return<p>
    //         There is no tag!
    //     </p>
    //     return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
    // }
    getBadgeClasess() {
        let clasess = "btn m-2 ";
        clasess += this.props.counter.value === 0 ? "btn-warning" : "btn-primary";
        return clasess;
    }
    formatCounter() {
        return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    }
}


export default Counter;