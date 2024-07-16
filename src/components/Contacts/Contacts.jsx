import css from "./Contact.module.css"

export default function Contacts({ id, name, number, deleteContact }) {
    return (
        <>
            <div className={css.contact}>
                <div className={css.container}>
                    <IoPerson />
                    {name}
                </div>
                <div className={css.container}>
                    <FaPhone />
                    {number}
                </div>
            </div>
            <button
                className={css.contactBtn}
                type="button"
                onClick={() => deleteContact(id)}
            >
                Delete
            </button>
        </>
    )
}