import React from 'react';
import ReactDOM from 'react-dom'
import Form from './Form'

export default class People extends React.Component{

    constructor(props){
        super(props)
        this.handlerClick = this.handlerClick.bind(this);
    }



    handlerClick(e){
        const people_num = e.currentTarget.getAttribute('data-person');
        ReactDOM.render(
            <Form/>,
            document.getElementById('calc_display')
            )
    }


    render(){
        return(
            <div className="btnPeople">
                <div className="btnPeople__field">
                    <div className="btnPeople__click" data-person='1' onClick={this.handlerClick}>1 Person</div>
                    <div className="btnPeople__click" data-person='2' onClick={this.handlerClick}>2 Person</div></div>
                <div className="btnPeople__field">
                    <div className="btnPeople__click" data-person='3' onClick={this.handlerClick}>3 Person</div>
                    <div className="btnPeople__click" data-person='4' onClick={this.handlerClick}>4 Person</div>
                </div>
                             
            </div>
        )
    }
}