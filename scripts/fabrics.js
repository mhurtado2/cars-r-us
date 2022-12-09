import { getFabrics, setFabric } from "./database.js";

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "fabrics") {
            const chosenOption = changeEvent.target.value
            setFabric(parseInt(chosenOption)) 
        }
    }
)



const fabrics = getFabrics()



export const Fabrics = () => {
    let html = "<h2>Interior</h2>"

    html += '<select id="fabrics">'
    html += '<option value="0">Select an interior material</option>'

    for (const fabric of fabrics) {
        html += `<option value="${fabric.id}">${fabric.fabric}</option>`
    }

    html += "</select>"
    return html

}
