const submitLinkButton = document.querySelector(".link-submit-button")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const mobileNavMenu = document.querySelector(".nav-bar-mobile-container")
const mobileNavContainer = document.querySelector(".navigation-container-mobile")
const structuralDiv = document.querySelector(".structural-div")

function copyShortLink() {
    //const id = this.getAttribute('data-argument')
    //document.querySelector(`#${id}1`).value.select()
    //document.execCommand("copy")
    //console.log(document.querySelector(`#${id}1`).value)
    //console.log(id)
    console.log("registered")
}

const shortenLink = async (event) => {
    event.preventDefault()
    if (document.querySelector(".link-input").value === "") {
        document.querySelector(".error-message").style.display = "block"
        document.querySelector(".link-input").style.border = "1px solid red"
    } else {
        const longLink = document.querySelector(".link-input").value
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`)
        const res = await response.json()
        const shortLink = res.result.short_link
        console.log(shortLink)

        const longLinkToDisplay = document.querySelector(".link-input").value.length <= 23 ? document.querySelector(".link-input").value : `${document.querySelector(".link-input").value.substring(0, 22)}...`

        const linkDetails = `<div class="link-details-container">
                                <p>${longLinkToDisplay}</p>
                                <div>
                                <input id=${shortLink + "1"} type="text" readonly value="${shortLink}" class="short-link">
                                <button data-argument=${shortLink} id=${shortLink} class="copy-link-button">Copy</button>
                                </div>
                            </div>`

        document.querySelector(".second-div-container").innerHTML += linkDetails
        document.querySelector(".short-link").style.width = document.querySelector(".short-link").value.length + "ch"
        document.querySelector(".copy-link-button").addEventListener("click", () => console.log("registered"))

        document.querySelector(".error-message").style.display = "none"
        document.querySelector(".link-input").style.border = "none"
    }
}

let openHamburger = true

const toggleHamburger = () => {
    if (openHamburger) {
        mobileNavMenu.style.display = "block"
        mobileNavContainer.style.backgroundColor = "rgba(250, 250, 250, 0.3)"
        mobileNavContainer.style.width = "100%"
        mobileNavContainer.style.height = "100%"
        mobileNavContainer.style.top = "0"
        mobileNavContainer.style.position = "fixed"
        structuralDiv.style.display = "block"
        openHamburger = false
    } else {
        mobileNavMenu.style.display = "none"
        mobileNavContainer.style.backgroundColor = "rgba(250, 250, 250, 0)"
        mobileNavContainer.style.width = "100%"
        mobileNavContainer.style.height = "fit-content"
        mobileNavContainer.style.top = "0"
        mobileNavContainer.style.position = "static"
        structuralDiv.style.display = "none"
        openHamburger = true
    }
}

hamburgerIcon.addEventListener("click", toggleHamburger)
submitLinkButton.addEventListener("click", shortenLink)

//DELETE LATER
document.querySelector(".copy-link-button").addEventListener("click", copyShortLink)
document.querySelector(".short-link").style.width = document.querySelector(".short-link").value.length + "ch"