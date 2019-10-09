import React from 'react'
import People from './People'
import Dotted from './Dotted';


 class Peoples extends React.Component{

    constructor(props){
        super(props)
        
        this.props.title = 0;
        
    }

    tabs(a){
        
        // const tabDesc = [{
        //     dotted:<People/>
        //     // people:"<People/>"
        // }]

        // tabDesc.map((item)=>{
        //     if(a == 0){
        //         console.log(item.dotted);
        //         return(
        //                 <div>
        //                     <h1>
        //                        {item.dotted}
        //                     </h1>
        //                 </div>)
        //     }
            
        // })
        
        if(a == 0){
            console.log(a+"s");
            return(
            <div>
                <h1>
                    Первое окно
                </h1>
            </div>)
        }else if(a == 1){
            console.log(a+"s");
            return (<div>
                <h1>
                    Второе окно
                </h1>
            </div>)
        }else if(a == 2){
            console.log(a+"s");
            return (<div>
                <h1>
                    Третье окно
                </h1>
            </div>)
        }
    }
    render(){
        return (
            <div>
                <h1>{this.tabs(this.props.title)}</h1>
            </div>
        )
    }
}


export default class Navigation extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            display:"1",
            tab1:<People/>, 
            tab2:<Dotted/>
        }
    }

    handlerClick(e){
       
        const tab_id = e.currentTarget.getAttribute('data-tab-id');
        const tab_comp = e.currentTarget.getAttribute('data-component');
        console.log(this.state.display)
        this.setState({
            display:tab_id,
            tab1:`<${tab_comp}/>`
        })
        
    }

 
    render(){
        return(
            <div>
                {
                    this.props.title.map((item, index)=>
                        <div data-tab-id={index} data-component="Peoples" onClick={(e)=>{this.handlerClick(e)}}>{item}</div>
                    )
                }
                {this.state.tab1}
                <Peoples title={this.state.display}/>
            </div>
        )
    }



}