//helper functions


function submitChannel() {

    const channelUrl = document.querySelector('.channel-input').value
    //send to server
    fetch('http://localhost:8888/.netlify/functions/main', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({channelUrl})
    })    
}



function newEl(type, attrib = {}) {
    const el = document.createElement(type)//create the element
    for (let attr in attrib) {
        const value = attrib[attr]
        /*if attrib has 'innerText' within it,
         add the value of the attribe propval pair as inner text of the element*/
        if (attr === 'innerText') el.innerText = value
        else el.setAttribute(attr, value)
    }

    return el
}

//load creators from api// get data from backend
async function loadCreators() {
    const res = await fetch('http://localhost:8888/.netlify/functions/main')
    const creators = await res.json()

    const ctnr = document.querySelector('.container') //select container div from DOM


    creators.forEach(creator => {
        const card = newEl('div', { class: 'card' }) //create a new card element with a class of card
        const title = newEl('h4', { innerText: creator.name }) //create title for card. insert attribute value as element's inner text
        const img = newEl('img', {src: creator.img}) //create image element for card
        card.appendChild(title)//put title in card element
        card.appendChild(img)//put image in card element
        ctnr.appendChild(card)//append the card as a child of the container element.
        //TODO: this function has side effects. solve this
    })
}


loadCreators()






