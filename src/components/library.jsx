import React from 'react';
import { Container } from 'react-bootstrap';
import PageTitleCard from './page-title-card';
import SpellList from './spell-list';

export default function Library(props) {
    const { spells, addSpell } = props;

    const text = [
        'Here you can browse through all the spells avaliable in 5e. If you find a spell that you like, press the "+" button to add it to your spellbook.',
        'There is not yet a filter. You can browse for certain keywords on this page by pressing ctrl-shift-f keys.'
    ]

    const filterSpells = () => {
        spells.filter(spell => spell.classes.name.contains("Wizard"));
    }

    return (
        <Container fluid>
            <PageTitleCard title="Library" text={text} />
            <br/>
            <hr className="hr" />
            <br/>
            <SpellList spells={spells} addSpell={addSpell} />
        </Container>
    )
}