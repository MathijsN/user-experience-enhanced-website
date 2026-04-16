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