import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findproduct = (order, allProducts) => {
    let orderProduct = null

    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findemployee = (order, allEmployees) => {
    let orderEmployee = null

    for (const employee in allEmployees) {
        if (allEmployees[employee].id === order.employeeId) {
            orderEmployee = allEmployees[employee]
        }   
    }
    return orderEmployee
} 

//expoortable orders func creates interplated html string 
export const Orders = () => {
    let html = ""
    html += "<ul>"


    for (const order of orders) {
        const employee = findemployee(order,employees)
        const product = findproduct(order,products)
        
        if(product !== null && employee !== null)
       { html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }}

    html += "</ul>"
//returns string
    return html
} 

