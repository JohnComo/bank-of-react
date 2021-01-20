import React from 'react'; 
import AccountBalance from "./AccountBalance"; 
import {Link} from "react-router-dom"; 

class Debit extends React.Component { 
    constructor(props) { 
        super(props)

        this.state = { 
            debit: { 
                description: "", 
                amount: 0, 
                date: ""
            }

        }
    }

    handleChange = (event) => { 
        const newDebit = {...this.state.debit}
        const name = event.target.name
        const value = event.target.value
        newDebit[name] = value
        let newDate = new Date()
        newDebit.date = newDate
        this.setState({ 
            debit: newDebit
        })
    }
    //updates input into database
    handleSubmit = (event) => { 
        this.props.addToDebitHistory(this.state.debit)
        this.forceUpdate(); 
    }

    render(){ 
        return(
            <div>
                <h1>Debits</h1>
                <Link to="/"> Home </Link>
                <AccountBalance accountBalance = {this.props.accountBalance}/>
                <div>
                    <form>
                        <div>
                            <label htmlFor = "description"> Debit Description </label>
                            <input 
                                type = "text"
                                name = "description"
                                placeholder = "Enter debit description"
                                onChange = {this.handleChange} />
                            
                        </div>
                        <div>
                            <label htmlFor= "amount"> Debit Amount</label> 
                            <input 
                                type = "text"
                                name = "description"
                                placeholder = "Enter debit amount"
                                onChange = {this.handleChange} />
                        </div>
                        <button type = "submit" onClick = {this.handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
                <div>
                    <h1> Debit History</h1>
                    <ul>
                        {this.props.debitHistory.map((debit) => ( 
                            <li key= {debit.id}>
                                Description: {debit.description}, Amount : {debit.amount}, Date: {debit.date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Debit; 