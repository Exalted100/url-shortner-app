//const submitButton = document.querySelector(".submit-button")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const mobileNavMenu = document.querySelector(".nav-bar-mobile-container")
const mobileNavContainer = document.querySelector(".navigation-container-mobile")
const structuralDiv = document.querySelector(".structural-div")

/*const shortenLink = () => {
    console.log("shorten link")
}*/

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
//submitButton.addEventListener("click", checkMail)