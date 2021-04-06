import axios from 'axios'

const CUSTOMER_API_URL = 'http://localhost:8080/customer'

class CustomerDataService {

        getCustomer(){
            return axios.get(CUSTOMER_API_URL)
        }
        createCustomer(customer){
            return axios.post(CUSTOMER_API_URL,customer
            )
        }
        getCustomerById(customerId){
            return axios.get('http://localhost:8080' + '/' + customerId)
        }
        updateCustomer(customer,customerId)
        {
            return axios.put('http://localhost:8080' + '/' + customerId,customer)
        }
        deleteCustomer(customerId){
            return axios.delete('http://localhost:8080' + '/' + customerId)
        }

}
export default new CustomerDataService()