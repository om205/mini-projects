const planet    = document.querySelector(    'select'   )
const mass      = document.querySelector(    'input'    )
const btn       = document.querySelector(    'button'   )
const output    = document.querySelector(   '#output'   )
const empty     = document.querySelector(   '.empty'    )
const selected  = document.querySelector(  '.selected'  )
const image     = document.querySelector('.planet-image')

btn.addEventListener('click', calculateWeight)

function calculateWeight()
{
    if(planet.value == 'none' || mass.value == '')
    {
        console.warn('Wrong input')
        empty.style.display = 'block'
        selected.style.display = 'none'
        return
    }
    let html = `
        <div class='text'>
            The weight of the object on <strong>${planet.value.toUpperCase()}</strong>
        </div>
        <div class = 'weight'>
            <strong>${(g[planet.value]*mass.value).toFixed()} N</strong>
        </div>
    `
    output.innerHTML = html;
    selected.style.display = 'flex'
    empty.style.display = 'none'
    image.src = `./images/${planet.value}.png`
}


const g = {
    'mercury'   : 3.61,
    'venus'     : 8.83,
    'earth'     : 9.8,
    'mars'      : 3.75,
    'jupiter'   : 26,
    'saturn'    : 11.2,
    'uranus'    : 10.5,
    'neptune'   : 13.3,
    'pluto'     : 0.61,
    'moon'      : 1.6
}
