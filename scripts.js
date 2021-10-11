const About = document.querySelector(".about")
const NFTs = document.querySelector(".NFT_page")
const NFTwhales = document.querySelector(".NFT_Whales")


const navButtons = document.querySelectorAll("button")



function buttons () {
    
    navButtons[0].addEventListener('click', () => {
        About.scrollIntoView({behavior: "smooth"})
})

navButtons[2].addEventListener('click', () => {
    hre
})

navButtons[3].addEventListener('click', () => {
    NFTwhales.scrollIntoView({behavior: "smooth"})
})

navButtons[4].addEventListener('click', () => {
    NFTs.scrollIntoView({behavior: "smooth"})
})

}

buttons ()