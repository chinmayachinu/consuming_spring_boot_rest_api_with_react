import React, { Component } from 'react';
import CustomerService from '../service/CustomerService';

class UpdateCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerName : '' ,
            companyName : '' ,
            userId : this.props.match.params.userId ,
            customerDatabaseId : 0 ,
            districtId : 0 ,
            createDate : '' ,
            transactionDate : ''
        }
        this.changeCustomerNameHandler=this.changeCustomerNameHandler.bind(this)
        this.changeCompanyNameHandler=this.changeCompanyNameHandler.bind(this)
        this.changeCustomerDatabaseIdHandler=this.changeCustomerDatabaseIdHandler.bind(this)
        this.changeDistrictIdHandler=this.changeDistrictIdHandler.bind(this)
        this.changeCreateDateHandler=this.changeCreateDateHandler.bind(this)
        this.changeTransactionDateHandler=this.changeTransactionDateHandler.bind(this)

        this.updateCustomer = this.updateCustomer.bind(this)

    }
    componentDidMount(){
        CustomerService.getCustomerById(this.state.userId).then(res=>{
            let customer =res.data
            this.setState({
            customerName : customer.customerName ,
            companyName : customer.companyName ,
            customerDatabaseId : customer.customerDatabaseId ,
            districtId : customer.districtId ,
            createDate : customer.createDate ,
            transactionDate : customer.transactionDate
            })
        })
    }
    changeCustomerNameHandler = event =>{
        this.setState({ customerName: event.target.value 
                    });
      }
      changeCompanyNameHandler = event =>{
        this.setState({ companyName: event.target.value 
                    });
      }
     
      changeCustomerDatabaseIdHandler = event =>{
        this.setState({ customerDatabaseId: event.target.value 
                    });
      }
      changeDistrictIdHandler = event =>{
        this.setState({ districtId: event.target.value 
                    });
      }
      changeCreateDateHandler = event =>{
        this.setState({ createDate: event.target.value 
                    });
      }
      changeTransactionDateHandler = event =>{
        this.setState({ transactionDate: event.target.value 
                    });
      }
      updateCustomer=(e) =>{
        e.preventDefault();
        let customer ={
            customerName : this.state.customerName,
            companyName: this.state.companyName,
            customerDatabaseId: this.state.customerDatabaseId,
            districtId: this.state.districtId,
            createDate: this.state.createDate,
            transactionDate: this.state.transactionDate
        }
        console.log('customer => ' + JSON.stringify(customer))
        
            CustomerService.updateCustomer( customer,this.state.userId).then(res => {
                this.props.history.push('/')
            })
        
        

    }
    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Customer</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Customer Name :</label>
                                    <input placeholder="Customer Name" name="customerName" 
                                        className="form-control" value={this.state.customerName}
                                        onChange={this.changeCustomerNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Company Name :</label>
                                    <input placeholder="Customer Name" name="companyName" 
                                        className="form-control" value={this.state.companyName}
                                        onChange={this.changeCompanyNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>User Id :</label>
                                    <input type="number" name="userId" 
                                        className="form-control" readOnly value={this.state.userId}
                                       />
                                </div>
                                <div className="form-group">
                                    <label>Customer Database Id :</label>
                                    <input type="number" name="customerDatabaseId" 
                                        className="form-control" value={this.state.customerDatabaseId}
                                        onChange={this.changeCustomerDatabaseIdHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>District Id :</label>
                                    <input type="number" name="districtId" 
                                        className="form-control" value={this.state.districtId}
                                        onChange={this.changeDistrictIdHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Create Date :</label>
                                    <input placeholder="Create Date" name="createDate" 
                                        className="form-control" value={this.state.createDate}
                                        onChange={this.changeCreateDateHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Transaction Date :</label>
                                    <input placeholder="Transaction Date" name="transactionDate" 
                                        className="form-control" value={this.state.transactionDate}
                                        onChange={this.changeTransactionDateHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.updateCustomer}>Update Customer</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
       
       
       </div>
        );
    }
}

export default UpdateCustomer;