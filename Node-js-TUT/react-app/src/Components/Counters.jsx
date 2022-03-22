import React, { Component } from 'react';
import Counter from "./Counter";


class Counters extends Component {

    render() {
        return (
            <div>

                <button
                    onClick={this.props.onReset}
                    className="btn btn-success btn-sm m-2">Reset</button>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncriment={this.props.onIncriment}
                        onDecriment={this.props.onDecriment}
                        //  value={counter.value}
                        //  id={counter.id} 
                        //or
                        counter={counter}
                    >
                        <h4>Counter #{counter.id}</h4>
                    </Counter>)}
            </div>
        );
    }
}

export default Counters;