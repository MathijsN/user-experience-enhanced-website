const viewButtons = document.querySelectorAll('.view-selection ul li button')
const grid = document.getElementById('grid')
const viewImg = document.querySelector('.viewImg')

viewButtons.forEach((button) => {
    button.addEventListener('click', ev => {

        const currentID = ev.target.id

        viewButtons.forEach(button => {
            button.className = ''
        })

        if (currentID === 'XLarge') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-Xlarge")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/Grid2White.svg"
        }
        if (currentID === 'Large') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-large")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/Grid3White.svg"
        }
        if (currentID === 'Medium') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-medium")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/Grid4White.svg"
        }
        if (currentID === 'Small') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-small")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/Grid5White.svg"
        }
        if (currentID === 'List') {
            grid.className = ''
            grid.classList.add("grid-view", "list")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/ListWhite.svg"
        }
    })
})

function loadInitialView() {
    grid.className = ''
    grid.classList.add("grid-view", "grid-large")

    document.getElementById('Large').classList.add("active-view")
}

loadInitialView()



const preview = document.querySelector('.image-preview');
const svg = document.querySelector('.picture-icon');
const uploadButton = document.querySelector('form.picture button')
const uploadButtonText = document.querySelector('form.picture button span')
const uploadLoading = document.querySelector('form.picture button div')

document.getElementById('file').onchange = function (evt) {
    const [file] = this.files;
    if (file) {

        // Set the src of the image to the local file path
        preview.src = URL.createObjectURL(file);

        // Show the image and hide the SVG icon

        preview.style.display = 'block'
        uploadButton.style.display = 'flex'
        svg.style.display = 'none'
        uploadLoading.style.display = 'none'
    }
}



const pictureForm = document.querySelector("form.picture")
const snapps = document.getElementById("grid")

pictureForm.addEventListener('submit', async function (e) {
    e.preventDefault()

    uploadLoading.style.display = 'block'
    uploadButtonText.textContent = 'Loading'

    let formData = new FormData(pictureForm);

    const response = await fetch(pictureForm.action, {
        method: 'POST',
        body: formData // <<< Dit moet omdat server.js anders niet met de formulier data kan werken
    })

    if (response.ok) {

        const responseData = await response.text()

        const parser = new DOMParser()
        const responseDOM = parser.parseFromString(responseData, 'text/html')

        // Zoek in die nieuwe HTML DOM onze nieuwe UI state op, die we via Liquid hebben klaargemaakt
        const newState = responseDOM.querySelector('ul#grid')

        // data van de server toevoegen aan de DOM, aan de scorelijst in de ol
        // Overschrijf de HTML met de nieuwe HTML

        preview.style.display = 'none'
        uploadButton.style.display = 'none'
        svg.style.display = 'block'

        snapps.innerHTML = newState.innerHTML

        document.getElementById('succes-dialog').show()
    } else {
        document.getElementById('failure-dialog').show()
    }



    // Loading state weghalen
    // Nu kan je waarschijnlijk de Loading state vervangen door een Success state
    uploadLoading.style.display = 'none'
    uploadButtonText.textContent = 'Upload!'
    console.log("Loading state weghalen")
})
