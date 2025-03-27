import "./App.css";
import { useSelector } from "react-redux";
import ContactForm from "../contact-form/ContactForm";
import SearchBox from "../search-box/SearchBox";
import ContactList from "../contact-list/ContactList";

function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;

// const [contacts, setContacts] = useState(() => {
//   const saveContacts = window.localStorage.getItem("save-contacts");
//   if (saveContacts !== null) {
//     return JSON.parse(saveContacts);
//   } else {
//     return defaultContacts;
//   }
// });

// const [inputValue, setInputValue] = useState("");

// const addContact = (newContact) => {
//   setContacts((prevContacs) => {
//     return [...prevContacs, newContact];
//   });
// };

// const deleteContact = (id) => {
//   setContacts((prevContacs) => {
//     return prevContacs.filter((contact) => contact.id !== id);
//   });
// };

// const visibleContacts = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
// );

// useEffect(() => {
//   window.localStorage.setItem("save-contacts", JSON.stringify(contacts));
// }, [contacts]);
