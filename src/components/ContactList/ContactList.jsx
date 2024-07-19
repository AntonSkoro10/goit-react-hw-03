import Contacts from "../Contacts/Contacts"

export default function ContactList({ contacts, deleteContact }) {
    return (
        <ul className={ }>
            {contacts.map(({ id, name, number }) => (     
                <li>
                    
            </li>
            ))}
        </ul>
    )
}