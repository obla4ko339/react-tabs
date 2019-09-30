import React from 'react'
import People from './People'

function Peoples(props){
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}


export default class Navigation extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            display:"1"
        }
    }

    handlerClick(e){
       
        const tab_id = e.currentTarget.getAttribute('data-tab-id');
        console.log(this.state.display)
        this.setState({
            display:tab_id
        })

    }

 
    render(){
        return(
            <div>
                {
                    this.props.title.map((item, index)=>
                        <div data-tab-id={index} onClick={(e)=>{this.handlerClick(e)}}>{item}</div>
                    )
                }

                <Peoples title={this.state.display}/>
            </div>
        )
    }



}