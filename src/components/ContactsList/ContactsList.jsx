import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneContact, fetchAllContacts } from "../../redux/contacts/contacts-operations";
import {getFilteredContacts} from "../../redux/contacts/contacts-selectors";
import {ListOfContacts, ListItem, Button} from './ContactList.styled';

export default function ContactsList () {    
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);

    console.log(contacts)


    return(
    <ListOfContacts>
        {contacts.map(({ name, number}) => {
        return (<ListItem key={name}><span>{name}: {number}</span>
        <Button type="button" onClick={() => dispatch(deleteOneContact(name))}
        >Delete</Button>
        </ListItem>)})}
    </ListOfContacts>        
    )
};
