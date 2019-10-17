import React from 'react';
import ExampleChild from './ExampleChild';

class Example extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    UNSAFE_componentWillMount() {
        console.log('WillMountCount before is: ' +  this.state.count);
        this.setState({
            count: 1
          });
        console.log('WillMountCount after is: ' +  this.state.count);
    }

    componentDidMount() {
        console.log('DidMount Count before is: ' +  this.state.count);
        this.setState({
            count: 2
          });
        console.log('DidMount after is: ' +  this.state.count);
    }
    componentDidUpdate() {
        console.log('DidUpdate Count is: ' +  this.state.count);
    }

    handleChange(event) {
        let value = parseInt(event.target.value);
        let newValue = (isNaN(value) ? 0 : value);
        this.setState({count: newValue});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        console.log('render Count is: ' +  this.state.count);
        return (
            <div>
                <h1>PARENT: count is: {this.state.count}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='enter number' type="text" onChange={this.handleChange} count={this.state.count} />
                    <input type="submit" value="Submit" />
                </form>
                <ExampleChild parentCount={this.state.count}/>
            </div>
        )
    }
}
export default Example;
