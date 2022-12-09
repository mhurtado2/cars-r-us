import { getWheels, setWheel } from "./database.js";


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            setWheel(parseInt(chosenOption)) 
        }
    }
)

const wheels = getWheels()


export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel package</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheel}</option>`
    }

    html += "</select>"
    return html

}