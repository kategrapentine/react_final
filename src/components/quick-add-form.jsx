import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

export default function QuickAddForm(props) {
    const {quickAddSpell, spell, spellOnChange} = props;

    const onClick = (e) => {
        e.preventDefault();
        quickAddSpell(spell);
    }

    return(
        <InputGroup className="mb-3">
            <FormControl onChange={spellOnChange} placeholder="ex. magic-missile"/>
            <InputGroup.Append>
                <Button
                    onClick={onClick}>Add Spell</Button>
            </InputGroup.Append>
        </InputGroup>        
    )
}