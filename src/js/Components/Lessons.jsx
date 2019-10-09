import React from 'react'

// const list = [
//     {
//         title:'react',
//         url:'yandex.ru',
//         autor:'Jordan',
//         num_comments:'3',
//         points:4,
//         objectId:0
//     },
//     {
//         title:'redux',
//         url:'v339.ru',
//         autor:'Vladimir',
//         num_comments:'1',
//         points:1,
//         objectId:1
//     }
// ]

const DEFAULT_QUERY = 'redux';
const PASH_BATH = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='

const url = `${PASH_BATH}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`

console.log(url);



export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            list:null,
            searchTerm:"",
            results:null,
            searchItem:DEFAULT_QUERY,
            status:"Загрузка..."
        }

        this.onSearchChange = this.onSearchChange.bind(this)
        //this.isSeacrhed = this.isSeacrhed.bind(this)
        this.setSearchTopStorues = this.setSearchTopStorues.bind(this)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this)
    }


    setSearchTopStorues(result){
        
        this.setState({results:result, list:result.hits})
        console.log(result.hits);
    }   

    componentDidMount(){
        const {searchItem, searchTerm} = this.state
        this.fetchSearchTopStories(searchTerm)
        // fetch(`${PASH_BATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchItem}`, {
        //     method:"get"
        // })
        //     .then(response => response.json())
        //     .then(result => this.setSearchTopStorues(result))
        //     .then(this.setState({status:""}))
    }

    fetchSearchTopStories(searchTerm){
        fetch(`${PASH_BATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(response=>response.json())
            .then(result=>this.setSearchTopStorues(result))
           
    }

            
    onSearchSubmit(event){
         
        const {searchTerm} = this.state
        this.fetchSearchTopStories(searchTerm)
        
        event.preventDefault()     
    }


    onSearchChange(event){
        this.setState({
            searchTerm:event.target.value
        })
        console.log(this.state.searchTerm)      

    }

    isSeacrhed(searchTerm){
        console.log(searchTerm)
        return function(item){
            
            return item.title.toLowerCase().includes(searchTerm.toLowerCase())
        }
    }

    render(){
       const {list, status} = this.state

       
        
        return(
            
            <div className="App">

             <div id="status">
                 {status}
             </div>


            <Search value={this.state.searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit} children="Search"/>
            {console.log(list)}
             {
                 list &&
                
                 <Table list={list}  pattern={this.state.searchTerm} /> 
                 


             }
             
             

           
            {
                //this.state.list.filter(this.isSeacrhed(this.state.searchTerm)).map((item=>item.title))
            }
            </div>
        )
    }


}


class Search extends React.Component{

    constructor(props){
        super(props)
        this.props.value = ""
        this.props.onChange;
        this.props.onSubmit
        this.props.children
    }

    

    render(){

        return(
            <form onSubmit={this.props.onSubmit}>
                <input type="text" value={this.props.value} onChange={this.props.onChange}/>
                <button type="submit">{this.props.children}</button>
            </form>
        )
    }
}







class Table extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            list:this.props.list
        }

        this.props.list;
        this.props.pattern;
        this.props.onDismis;
        this.props.children; 
        // this.isSeacrhed = this.isSeacrhed.bind(this)
        this.onDismiss = this.onDismiss.bind(this)
        
      
        
    }

    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }



    // isSeacrhed(searchTerm){
    //     console.log(searchTerm)
    //     return function(item){
    //         console.log(item)
    //         return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    //     }
    // }

    onDismiss(id){
        const updateList = this.state.list.filter((item)=>{
              return item.objectID !== id
        })
       
        this.setState({
            list:updateList
        })
    }




    render(){

        return(
            <div>
                {this.props.children}

                {this.props.list.map(item=>
                <div>
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>    
                    <span>
                        {item.autor}
                    </span>
                    <span>
                        {item.num_comments}
                    </span>

                    <Button className="divClass" onClick={
                        ()=>this.onDismiss(item.objectID)
                    }>
                        Delete
                    </Button>
                    </div>
                )}
            </div>
        )

    }


}


class Button extends React.Component{

    render(){

        const {onClick, 
            className="", 
            children} = this.props

        return(
            <div>
                <button onClick={onClick} className={className}>{children}</button>
            </div>
        )
    }
}