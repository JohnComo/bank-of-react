import React from 'react'; 
import AccountBalance from "./AccountBalance"; 
import {Link} from "react-router-dom"; 

class Credit extends React.Component { 
    constructor(props) { 
        super(props)

        this.state = { 
            credit: { 
                description: "", 
                amount: 0, 
                date: ""
            }

        }
    }

    handleChange = (event) => { 
        const newCredit = {...this.state.credit}
        const name = event.target.name
        const value = event.target.value
        newCredit[name] = value
        let newDate = new Date()
        newCredit.date = newDate
        this.setState({ 
            credit: newCredit
        })
    }
    //updates input into database
    handleSubmit = (event) => { 
        this.props.addToCreditHistory(this.state.credit)
        this.forceUpdate(); 
    }

    render(){ 
        return(
            <div>
                <h1>Credits</h1>
                <Link to="/"> Home </Link>
                <AccountBalance accountBalance = {this.props.accountBalance}/>
                <div>
                    <form>
                        <div>
                            <label htmlFor = "description"> Credit Description </label>
                            <input 
                                type = "text"
                                name = "description"
                                placeholder = "Enter credit description"
                                onChange = {this.handleChange} />
                            
                        </div>
                        <div>
                            <label htmlFor= "amount"> Credit Amount</label> 
                            <input 
                                type = "text"
                                name = "description"
                                placeholder = "Enter credit amount"
                                onChange = {this.handleChange} />
                        </div>
                        <button type = "submit" onClick = {this.handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
                <div>
                    <h1> Credit History</h1>
                    <ul>
                        {this.props.creditHistory.map((credit) => ( 
                            <li key= {credit.id}>
                                Description: {credit.description}, Amount : {credit.amount}, Date: {credit.date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Credit; 