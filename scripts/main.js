//import the interpolated string creating functions for these database objects
import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

// create var to hold document.queryselector method and attaching my container id using (#) from
// my index.html <main> element
const mainContainer = document.querySelector("#container")
// create var to hold my interpolatd html string wrapped in html element tags and identifiying with classes for CSS
const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`
//use mainContainer var w JScripts (innerHTML) method equal to the HTML string Ive created 
mainContainer.innerHTML = applicationHTML

