const header = document.getElementById("header")




function createHeader(){
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


createHeader()