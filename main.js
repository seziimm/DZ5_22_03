const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const yuan = document.querySelector('#yuan')

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.onload = () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     }
// })

const convert = (elem, target, isTrue, target2, isTrue2,  target3, isTrue3, target4, isTrue4) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                target.value = (elem.value / response.usd).toFixed(2)
            }
            else  {
                target.value = (elem.value * response.usd).toFixed(2)
            }
            if (isTrue2) {
                target2.value = (elem.value / response.euro).toFixed(2)
            }
            else {
                target2.value = (elem.value / response.erUSD).toFixed(2)
            }
            if (isTrue3) {
                target3.value = (elem.value * response.euro).toFixed(2)
            } else {
                target3.value = (elem.value * response.erUSD).toFixed(2)
            }
            if (isTrue4) {
                target4.value = (elem.value / response.yuan).toFixed(2)
            } else {
                target4.value = (elem.value * response.yuan).toFixed(2)
            }

            elem.value === ''  && (target.value = '')
            elem.value === ''  && (target2.value = '')
            elem.value === ''  && (target3.value = '')
            elem.value === ''  && (target4.value = '')
        }
    })
}


convert(som, usd, true, euro, true, yuan, true)
convert(usd, som,  false, euro, false, yuan, false)
convert(euro, som, true, som, true, yuan, true )
convert(euro, usd, false,  usd, false, yuan, false )
convert(yuan, som, true, usd, true, euro, true)
convert(yuan, usd, false, som, false, euro, false)
convert(yuan, euro, true, som, true, usd, true)











