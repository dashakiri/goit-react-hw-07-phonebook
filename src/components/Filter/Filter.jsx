import React from "react";
import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/contacts/contacts-action";
import {FilterLablel, Input} from './Filter.styled';

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <FilterLablel>
            Find contacts by name
            <Input
            type="text"
            onChange={e => dispatch(filterContact(e.target.value))}
            />
        </FilterLablel>
    );
};

export default Filter;