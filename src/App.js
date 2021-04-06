import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import CustomerList from './components/CustomerList'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CustomerForm from './components/CustomerForm';
import UpdateCustomer from './components/UpdateCustomer'
class App extends React.Component {
  render() {
    return (
      <div>
         <Router>
               <HeaderComponent></HeaderComponent>
                  <div className="container">
                     <Switch>
                        <Route path="/" exact component={CustomerList}></Route>
                        <Route path="/add-customer"  component={CustomerForm}></Route>
                        <Route path="/update-customer/:userId"  component={UpdateCustomer}></Route>

                     </Switch>
             </div>
               <FooterComponent></FooterComponent>
          </Router>
      </div>
     
    );
  }
}
export default App;
