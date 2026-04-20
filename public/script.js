const viewButtons = document.querySelectorAll('.view-selection ul li button')
const grid = document.getElementById('grid')
const viewImg = document.querySelector('.viewImg')
const succesPopover = document.getElementById('succes-message')
const errorPopover = document.getElementById('error-message')

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


document.getElementById('file').onchange = function (evt) {
    const [file] = this.files;
    if (file) {
        const preview = document.querySelector('.image-preview');
        const svg = document.querySelector('.picture-icon');

        // Set the src of the image to the local file path
        preview.src = URL.createObjectURL(file);

        // Show the image and hide the SVG icon
        preview.style.display = 'block';
        svg.style.display = 'none';
    }
};

if (window.location.href.includes('succes')) {
    succesPopover.showPopover()
}
if (window.location.href.includes('upload_failed')) {
    errorPopover.showPopover()
}



const pictureForm = document.querySelector("form.picture")
const pictureFormButton = document.querySelector("form.picture button")
const snapps = document.getElementById("grid")
const loadingIndicator = document.querySelector("div#loading")

pictureForm.addEventListener('submit', async function (e) {
    e.preventDefault()

    loadingIndicator.classList.add('shown')

    let formData = new FormData(pictureForm);

    const response = await fetch(pictureForm.action, {
        method: pictureForm.method, //POST dus
        body: new URLSearchParams(formData) // <<< Dit moet omdat server.js anders niet met de formulier data kan werken
    })


    const responseData = await response.text()
    console.log(responseData)

    const parser = new DOMParser()
    const responseDOM = parser.parseFromString(responseData, 'text/html')

    // Zoek in die nieuwe HTML DOM onze nieuwe UI state op, die we via Liquid hebben klaargemaakt
    const newState = responseDOM.querySelector('ul#grid')

    // data van de server toevoegen aan de DOM, aan de scorelijst in de ol
    // Overschrijf de HTML met de nieuwe HTML
    snapps.innerHTML = newState.innerHTML

    // Loading state weghalen
    // Nu kan je waarschijnlijk de Loading state vervangen door een Success state
    console.log("Loading state weghalen")
    loadingIndicator.classList.remove("shown")
    loadingIndicator.classList.add("hidden")
})
