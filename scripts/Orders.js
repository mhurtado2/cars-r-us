import { getOrders, getPaints, getFabrics, getWheels, getTechnology } from "./database.js"

const paints = getPaints()
const fabrics = getFabrics()
const wheels = getWheels()
const technologies = getTechnology()


const buildOrderListItem = (order) => {
    const chosenPaint = paints.find(color => {
        return color.id === order.colorId
    })
    const chosenFabrics = fabrics.find(fabric => {
        return fabric.id === order.fabricId
    })
    const chosenWheels = wheels.find(wheel => {
        return wheel.id === order.wheelId
    })
    const chosenTech = technologies.find(tech => {
        return tech.id === order.techId
    })
    const totalCost = chosenPaint.price + chosenFabrics.price + chosenWheels.price + chosenTech.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    ${chosenPaint.color} with ${chosenWheels.wheel}, ${chosenFabrics.fabric}, and the ${chosenTech.tech} for a total cost of ${costString}
</li>`
}





export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
