import { getChildren } from "./database.js"

const children = getChildren()




document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target
       
       if (itemClicked.id.startsWith("child")) {
           
        const [,childId] = itemClicked.id.split("--")
        
        let matchingChild = null
        
            for (const child of children) {
                if (parseInt(childId) === child.id) {
                    matchingChild = child
                }
            }
            window.alert(`${matchingChild.name}'s wish is to ${matchingChild.wish}`)
        }
    }
)





export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="child--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}
