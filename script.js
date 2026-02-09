const header = document.getElementById("header")
const main = document.getElementById("main")


function init() {
    createHeader()
    createAside()
    createBoxNews()
}


function createHeader() {
    let news = document.createElement("h3")
    news.textContent = "News"
    header.append(news)

    let home = document.createElement("h5")
    home.textContent = "Home"
    home.id = "home-buttun"
    header.append(home)

    let createStory = document.createElement("h5")
    createStory.textContent = "Create story"
    header.append(createStory)
}


function createAside() {
    let aside = document.createElement("aside")
    aside.id = "menu"
    main.append(aside)
}


async function createBoxNews() {
    let boxNews = document.createElement("div")
    boxNews.id = "box-news"
    main.append(boxNews)

    for (let i = 1; i <= 8; i++) {
        let box = document.createElement("div")
        box.id = `box-news${i}`

        const data = localStorage.getItem("dataNews")
        const dataJson = JSON.parse(data)

        let dataImag = dataJson.articles[i - 1].image
        let imag = document.createElement("img")
        imag.src = dataImag
        box.append(imag)
        
        let h3 = document.createElement("h3")
        h3.textContent = dataJson.articles[i - 1].title
        box.append(h3)
        
        boxNews.append(box)
    }
}



// async function getNews() {
//     const data = await fetch("https://gnews.io/api/v4/top-headlines?category=general&lang=he&country=li&max=10&apikey=b7275345cb2d91fb34d031b27fb85189")
//     const jsonData = await data.json()
//     console.log(jsonData);

//     const dataString = JSON.stringify(jsonData)
//     localStorage.setItem("dataNews", `${dataString}`)
// }





// getNews()
init()





