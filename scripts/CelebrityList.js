import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()


document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target
       
       if (itemClicked.id.startsWith("star")) {
           
        const [,starId] = itemClicked.id.split("--")
        
        let matchingStar = null
        
            for (const celebrity of celebrities) {
                if (parseInt(starId) === celebrity.id) {
                    matchingStar = celebrity
                }
            }
            window.alert(`${matchingStar.name} is a World Class Athlete in ${matchingStar.sport}`)
        }
    }
)




export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li id="star--${star.id}">${star.name}</li>`
    }

    html += "</ol>"
    return html
}
