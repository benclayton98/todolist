import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
          list : [],
          userInput : '',
          strike: ''
        }
    }
    change = (input) =>{
      this.setState({userInput: input})
    }

    add = () => {
      let newList = this.state.list;
      newList.push({text:this.state.userInput, bool: false});
      this.setState({list: newList, userInput: ''});
      console.log(this.state.list);
    }

    boolCheck(value){
      if(value.bool){
        value.bool = false;
        this.setState({strike:''})
      }
      else{
        value.bool = true;
        this.setState({strike:'line-through'})
      

      }
      console.log(value.bool);
    }

    render(){
        return (
            <div>
                <label>
                To Do:
            <input type="text" onChange={(e) => this.change(e.target.value)}
            placeholder="Enter item here" value={this.state.userInput} />

                </label>
            <button type="submit" value="Submit" onClick={this.add}>Submit</button>

            <ul>
            {this.state.list.map((v) => <div style={{textDecorationLine:this.state.strike}}><input type="checkbox" defaultChecked={v.bool} value={v.text} onChange={()=>this.boolCheck(v)}/>{v.text}</div>)}
            </ul>

            </div>

        )
    }
}

export default List;
