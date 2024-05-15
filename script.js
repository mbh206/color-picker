function displayColors(data) {
    let colorsHtml = data.map(color => {
        return `<div class="my-color" style="background-color:${color.hex};"></div>`
    }).join('')

    document.body.innerHTML = `
    <div class="my-colors">
        ${colorsHtml}
    </div>`
    console.log(colorsHtml)
    console.log(document)
}

async function getColors(colorCount) {
    let res = await fetch(`https://x-colors.herokuapp.com/api/random?number=${colorCount}`)
    let data = await res.json()
    displayColors(data)
}
let colorCount = 100
getColors(colorCount)
