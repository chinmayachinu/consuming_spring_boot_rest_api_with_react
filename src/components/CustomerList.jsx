import React, { Component } from 'react';
import CustomerService from '../service/CustomerService';

class CustomerList extends Component {
    constructor(props){
        super(props)
        this.state={
            customer: []
        }
        this.addCustomer=this.addCustomer.bind(this);
        this.editCustomer=this.editCustomer.bind(this);
        this.deleteCustomer=this.deleteCustomer.bind(this);
    }
    deleteCustomer(userId){
        CustomerService.deleteCustomer(userId).then(
            res => {
                this.setState({customer : this.state.customer.filter(emp => emp.userId !== userId)})
            }
        )
    }
    editCustomer(userId){
        this.props.history.push('/update-customer/' + userId)
    }
    componentDidMount(){
        CustomerService.getCustomer().then((res) => {
                this.setState({ customer : res.data })
        })
    }

    addCustomer(){
        this.props.history.push('/add-customer')
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Customer List</h2>
                    <div className="row">
                    <button className="btn btn-primary" onClick={this.addCustomer}>Add Customer</button>
                    </div>
                     <div className="row">
                        <table className="table table-striped table-bordered ">
                                <thead>
                                    <tr>
                                    <th>Customer Name</th>
                                    <th>Company Name</th>
                                    <th>User Id</th>
                                    <th>Customer Database Id</th>
                                    <th>District Id</th>
                                    <th>Create Date</th>
                                    <th>Transaction Date</th>
                                    <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.customer.map(
                                            customer =>
                                            <tr key = {customer.userId}>
                                                <td> { customer.customerName} </td>
                                                <td> { customer.companyName} </td>
                                                <td> { customer.userId} </td>
                                                <td> { customer.customerDatabaseId} </td>
                                                <td> { customer.districtId} </td>
                                                <td> { customer.createDate} </td>
                                                <td> { customer.transactionDate} </td>
                                                <td>
                                                    <button onClick={()=> this.editCustomer(customer.userId)}
                                                            className="btn btn-info">Update</button>
                                                     <button onClick={()=> this.deleteCustomer(customer.userId)}
                                                            className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                
                                </tbody>
                         </table>
                
                      </div>
            </div>
        );
    }
}

export default CustomerList;