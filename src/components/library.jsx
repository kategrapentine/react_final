import React from 'react';
import { Card, Container } from 'react-bootstrap';
import PageTitleCard from './page-title-card';
import SpellCard from './spell-card';

export default function Library(props) {
    const { spells, addSpell } = props;

    const text = 'Here you can browse through all the spells avaliable in 5e. If you find a spell that you like, press the "+" button to add it to your spellbook.';
    const text2 = 'There is not yet a filter. You can browse for certain keywords on this page by pressing ctrl-shift-f keys.';

    return (
        <Container fluid>
            <PageTitleCard title="Library" text={text} text2={text2} />
            <br/>
            <hr className="hr" />
            <br/>
            <SpellCard spells={spells} addSpell={addSpell} />
        </Container>
    )
}