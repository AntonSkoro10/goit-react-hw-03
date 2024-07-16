import { useState, useEffect } from "react"
import ContactsForm from "../ContactForm/ContactForm"
import ContactsList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import contactsData from "../../contacts.json"

export default function App() {
    const [contacts, setContacts] = useState(() => {
        const storageContacts = localStorage.getItem("contacts")
        return storageContacts ? JSON.parse(storageContacts) : contactsData
    })

    const [filter, setFilter] = useState("")

    useEffect(() => {
        localStorage.setItem("conracts", JSON.stringify(contacts))
    }, [contacts])

    const addContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact])
    }

    const deleteContact = (id) => {
        setContacts((prevContacts) => 
            prevContacts.filter((contacts) => contacts.id !== id)
        )
    }

    const visibleContacts = contacts.filter((contacts) =>
        contacts.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <>
  <h1>Phonebook</h1>
    <ContactsForm addContact={addContact} />
    <SearchBox filter={filter} onFilter={setFilter} />
    <ContactsList contacts = {visibleContacts} deleteContact = {deleteContact} />
</>

    )
}