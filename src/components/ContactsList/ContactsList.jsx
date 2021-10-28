import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-action";
import {getFilteredContacts} from "../../redux/contacts/contacts-selectors";
import {ListOfContacts, ListItem, Button} from './ContactList.styled';

export default function ContactsList () {    
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    return(
    <ListOfContacts>
        {contacts.map(({id, name, number}) => {
        return (<ListItem key={id}><span>{name}: {number}</span>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}
        >Delete</Button>
        </ListItem>)})}
    </ListOfContacts>        
    )
};
