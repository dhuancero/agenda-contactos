const saveContact = (db, contact) => {
  if (
    contact.name === "" ||
    contact.number === "" ||
    contact.direction === ""
  ) {
    return showErrorContact();
  }
  db.setItem(contact.id, JSON.stringify(contact));
  window.location.href = "/";
};

const getContact = (db) => {
  let getContact = Object.keys(db);
  // console.log(getContact)
  /**
   * ? Creamos la estructura HTML
   */
  const contact = document.querySelector(".list-contacts");
  const addContact = document.createElement("table");
  addContact.classList.add("table");
  addContact.classList.add("table-striped");

  addContact.innerHTML = `
  <thead>
    <tr>
      <th scope="col" class="text-success text-uppercase">Nombre</th>
      <th scope="col" class="text-success text-uppercase">Teléfono</th>
      <th scope="col" class="text-success text-uppercase">Direccion</th>
    </tr>
  </thead>
  <tbody class="listContent">
  </tbody>
`;
  contact.appendChild(addContact);

  for (clave of getContact) {
    const contacto = JSON.parse(db.getItem(clave));
    createContact(contacto);
    // console.log(contacto)
  }
};

const createContact = (contacto) => {
  //*: Mostramos los valores con JS
  // const contact = document.querySelector(".list-contacts");
  // const addContact = document.createElement("div");
  // addContact.classList.add("contact");
  const newContact = document.querySelector(".listContent");
  const addNewContact = document.createElement("tr");
  addNewContact.classList.add("table-active");
  addNewContact.innerHTML = `
      <th scope="row">${contacto.name}</th>
      <td>${contacto.number}</td>
      <td>${contacto.direction}</td>
      <td><span class="material-icons text-danger icon" onClick="deleteContact('${contacto.id}')">remove_circle</span></td>
  `;
  newContact.appendChild(addNewContact);
};

const deleteContact = (contactId) => {
  const db = window.localStorage;
  db.removeItem(contactId);
  window.location.href = "/";
};

const showErrorContact = () => {
  alert("Error");
  const message = document.querySelector(".message");
};
