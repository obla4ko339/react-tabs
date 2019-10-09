import React from 'react'
import Navigation from './Navigation';

export default class Dotted extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            status:"active",
            isActive:true
        }

        
    }


    eventState(e){
        console.log(e.currentTarget.getAttribute('data-tabs'));
        const idTabs = e.currentTarget.getAttribute('data-tabs');
        if(this.state.isActive === true){
            this.setState({
                status:"noactive",
                isActive:false
            })
        }else if(this.state.isActive === false){
            this.setState({
                status:'active',
                isActive:true   
            });
        }
    }


    render(){
        const tabData = [
            {
                title:'t1',
                title:'t2',
                title:'t3'
            }
        ]

        const tabs = [
            "t1","t2","t3"
        ]
        return(
            // <div>
            //     <div class="calc__ping" id="ping" data-tabs='1' onClick={(e)=>{this.eventState(e)}} className={this.state.status}>1</div>
            //     <div class="calc__ping" id="ping" data-tabs='2' onClick={(e)=>{this.eventState(e)}} className={this.state.status}>2</div>
            //     <div class="calc__ping" id="ping" data-tabs='3' onClick={(e)=>{this.eventState(e)}} className={this.state.status}>3</div>
            // </div>



            <div id="calc__container" class="calc__container">
            <div id="calc__navig" class="calc__navig">
               
               <Navigation title={tabs}/>
                
            </div>

            <div class="calc__display" id="calc_display">
                Отображение
            </div>



            </div>
        )
    }


}