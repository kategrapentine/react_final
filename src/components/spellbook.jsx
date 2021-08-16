import React from 'react';
import { Container } from 'react-bootstrap';
import PageTitleCard from './page-title-card';
import SpellList from './spell-list';

export default function Spellbook(props) {
    const { list, removeSpell, spells, quickAddSpell, spell, spellOnChange, updateSpell } = props;

    const text = [
        "This is your spell book, go to the Library to add spells to it or you can use the quick add feature below.",
        "When using the quick add feature, make sure your spelling is correct otherwise the spell will not be added."
    ]

    return (
        <Container fluid>
            <PageTitleCard title="Spellbook" text={text} quickAdd={true} quickAddSpell={quickAddSpell} spell={spell} spellOnChange={spellOnChange} />
            <br/>
            <hr className="hr" />
            <br/>
            <SpellList spells={spells} list={list} removeSpell={removeSpell} updateSpell={updateSpell} />
            
        </Container>
    );
}