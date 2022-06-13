import { getOrders } from "./database.js"
const orders = getOrders()
//import employees map func 
import { getEmployees } from "./database.js"
//set to var
const employees = getEmployees()

//create exportable func to loop through each obj and adding 
//the id and name key values to a interplated string 
export const Employees = () => {
   // create var to hold string value within method and start w <ul> element
    let html = "<ul>"
//loop to isolate and use indiv employee obj values in string
    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }
 // close string with ul tag
    html += "</ul>"
//return interpolated string
    return html
}


const employeeOrders = (employee) => {
    let employeeOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
           employeeOrders ++;
        }
    }// Return employee filled orders
    return employeeOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                const orderCount = employeeOrders(employee)
                    window.alert(` ${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)