import React from 'react'
import People from './People'

export default class Navigation extends React.Component{


    constructor(props){
        super(props)
    }

    handlerClick(e){
       
        const tab_id = e.currentTarget.getAttribute('data-tab-id');
        return tab_id;
    }

    targetTab(tabId=1){
        if(tabId == 1){
            console.log(tabId+" TAb")
            return <People/>
        }else if(tabId == 2){
            console.log(tabId+" TAb")
        }
    }

    render(){
        return(
            <div>
                {
                    this.props.title.map((item, index)=>
                        <div data-tab-id={index} onClick={(e)=>{this.handlerClick(e)}}>{item}</div>
                    )
                }

                <div>
                    {
                        this.targetTab(2)
                        
                    }
                </div>
            </div>
        )
    }



}