import { getTechnology, setTechnology } from "./database.js";


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            setTechnology(parseInt(chosenOption)) 
        }
    }
)



const technology = getTechnology()


export const Technology = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a tech package</option>'

    for (const tech of technology) {
        html += `<option value="${tech.id}">${tech.tech}</option>`
    }

    html += "</select>"
    return html

}






