import React from 'react';
class ExampleChild extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            color: 'red',
          };
    }
    UNSAFE_componentWillMount() {
        console.log('Child WillMountCount before is: ' +  this.state.count  + ', color: ' + this.state.color);
        this.setState({
            count: 1
          });
        console.log('Child WillMountCount after is: ' +  this.state.count  + ', color: ' + this.state.color);
    }
    
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if (this.props.count !== nextProps.parentCount) {
    //         this.setState(
    //             {
    //                 count: nextProps.parentCount,
    //                 //color:'green'
    //             }
    //         );
    //     }
    // }

    componentDidMount() {
        console.log('Child DidMount Count before is: ' +  this.state.count  + ', color: ' + this.state.color);
        this.setState({
            count:5,
            color: 'blue',
        });
        console.log('Child DidMount after is: ' +  this.state.count  + ', color: ' + this.state.color);
    }
    
    shouldComponentUpdate(nextProps) {
        if (this.state.count !== nextProps.parentCount) {
            return true;
        }return false;
    }

    componentDidUpdate() {
        console.log('Child DidUpdate Count is: ' +  this.state.count  + ', color: ' + this.state.color);
    }

    
    render() {
        console.log('Child render Count is: ' +  this.state.count + ', color: ' + this.state.color);
        return (
            <div>
                <h1>CHILD: count is: {this.state.count} and props.parentCount is: {this.props.parentCount}</h1>
            </div>
        )
    }
}
export default ExampleChild;