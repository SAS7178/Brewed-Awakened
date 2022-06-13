//imports func to get each procuct obj
import { getProducts } from "./database.js"
//set to var
const products = getProducts()
//exportable func to create interpolated string of project w key values id and name 
export const Products = () => {
    //var to hold string and start w <ul> element tag
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }
// end string wrap with </ul> tag
    html += "</ul>"
//return html string
    return html
}

