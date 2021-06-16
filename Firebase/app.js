const blocslist = document.querySelector('[data-js="Blocs-List"]')
const db = firebase.firestore()

db.collection('Blocos').get()
    .then( snapshot => {
       const blocs =  snapshot.docs.reduce((acc,doc)=> {
           const {Titulo, Texto, Data} = doc.data()
            acc += `<li class="listblocs">
            <h5>${Titulo}</h5>
            <p> Adicionado em ${Data}</p>
            <p> ${Texto}</p>
            </li>`
            return acc
        },'')
        blocslist.innerHTML = blocs
    })
    .catch(err => {console.log(err.message)})
    