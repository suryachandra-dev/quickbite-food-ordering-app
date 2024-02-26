import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            message:0,
        };
        console.log(this.props.name+' Child Constructor');
    }
    componentDidUpdate(){
        console.log('Component Did Upadte');
    }
    componentWillUnmount(){
        console.log('Component Will Unmount');
        clearInterval(this.timer);
    }
    async componentDidMount(){
        const data=await fetch('https://api.github.com/meta');
        const json=await data.json();
        console.log(json);
        this.setState({message:json.message});
        this.timer=setInterval(()=>{
            console.log('SWIGGY APP');
        },1000)
    }
    render(){
        const {name,location}=this.props;
        const {count}=this.state;
        console.log(this.props.name+' Child render');
        return (
            <div className="user-card">
            {/* <h1>Count:{count}</h1> */}
            {/* <button onClick={
                ()=>{
                //Never Update State variables Directly
                // this.state.count=this.state.count+1
                this.setState({
                    count:this.state.count+1
                })
            }
            }>Count Increase</button> */}
            {/* <h2>Name:{this.state.message}</h2> */}
            <h3>Location:{location}</h3>
            <h4>Contact:suryavijetha123@gmail.com</h4>
            <h4>Number:6303855068</h4>
        </div>
        )
        }
}
export default UserClass;