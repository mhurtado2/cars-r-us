import { getPaints, setPaint } from "./database.js";


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            const chosenOption = changeEvent.target.value
            setPaint(parseInt(chosenOption)) 
        }
    }
)



const paints = getPaints()

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paints">'
    html += '<option value="0">Select Your Paint Color</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html

}