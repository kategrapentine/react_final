import { render } from '@testing-library/react';
import React from 'react';
import { Container } from 'react-bootstrap';
import PageTitleCard from './page-title-card';
import SpellCard from './spell-card';

export default function Spellbook(props) {
    const { list, removeSpell, spells, quickAddSpell, spell, spellOnChange } = props;

    const text = "This is your spell book, go to the Library to add spells to it or you can use the quick add feature below.";
    const text2 = "When using the quick add feature, make sure your spelling is correct otherwise the spell will not be added.";

    return (
        <Container>
            <PageTitleCard title="Spellbook" text={text} text2={text2} quickAdd={true} quickAddSpell={quickAddSpell} spell={spell} spellOnChange={spellOnChange} />
            <br/>
            <hr className="hr" />
            <br/>
            <SpellCard spells={spells} list={list} removeSpell={removeSpell}/>
            
        </Container>
    );
}