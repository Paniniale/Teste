const blocslist = document.querySelector('[data-js="Blocs-List"]')
const btnadd = document.querySelector('[data-js="adiciona"]')
const db = firebase.firestore()

db.collection('Blocos').get()
    .then( snapshot => {
       const blocs =  snapshot.docs.reduce((acc,doc)=> {
           const {Titulo, Texto, Data} = doc.data()
            acc += `<li class="listblocs">
            <h5>${Titulo}</h5>
            <p> Adicionado em ${Data} </p>
            <p> ${Texto}</p>
            </li>`
            return acc
        },'')

        blocslist.innerHTML = blocs
    })
    .catch(err => {console.log(err.message)})


console.log(btnadd)

btnadd.addEventListener('submit', saveDB )


function saveDB(e) {
    e.preventDefault()
    
    db.collection('Blocos').add({
        Titulo: e.target.Titulo.value,
        Texto: e.target.Texto.value,
        Data: '15 de abril'
    })
    .then(() => {
        Console.log("Nota Adicionada")
    })
    .catch(() => {
        Console.log("Nota Não Adicionada")
    })
}