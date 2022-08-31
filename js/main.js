/* Obtenemos las constantes de los datos */
const nameData = document.querySelector(".nombre");
const number = document.querySelector(".numero");
const direction = document.querySelector(".direccion");
const btnAddContact = document.querySelector(".btn-add-contacts");

const listContacts = document.querySelector(".list-contacts");

const db = window.localStorage;

btnAddContact.onclick = () => {
  // almacenalos los valores en un objeto
  let contact = {
    id: Math.random(1, 100),
    name: nameData.value,
    number: number.value,
    direction: direction.value,
  };
  saveContact(db, contact);
};
getContact(db);
