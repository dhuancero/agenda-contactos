const saveContact = (db, contact) => {
    if (contact.name === '' || contact.number === '' || contact.direction === '') {
      return showErrorContact()
    }
    db.setItem(contact.id, JSON.stringify(contact));
    window.location.href = '/'
  }
  
  const getContact = (db) => {
  
    let getContact = Object.keys(db)
    // console.log(getContact)
    for (clave of getContact) {
      const contacto = JSON.parse(db.getItem(clave))
      createContact(contacto)
      // console.log(contacto)
    }
  }
  
  const createContact = (contacto) => {
    //*: Mostramos los valores con JS
    const contact = document.querySelector('.list-contacts')
    const addContact = document.createElement('div')
    addContact.classList.add('contact')
    addContact.innerHTML = `
      <h3>${contacto.name}</h3>
      <p>${contacto.number}</p>
      <p>${contacto.direction}</p>
      <span class="material-icons icon" onClick="deleteContact('${contacto.id}')">remove_circle</span>
      `
    contact.appendChild(addContact)
  }
  
  
  const deleteContact = (contactId) => {
    const db = window.localStorage
    db.removeItem(contactId)
    window.location.href = '/'
  }
  
  const showErrorContact = () => {
    alert('Error')
  }