import React from 'react';
import { Container, Card } from 'react-bootstrap';
import PageTitleCard from './page-title-card';

export default function Home() {
const text = "This is a resource to help you keep track of all your spells in one place. You can browse through all of the spells using the Library and add them to your spellbook.";
const text2 = "You can manage your spells in your spellbook and keep track of your prepared spells.";

    return (
        <Container>
            <PageTitleCard title={"Welcome to D&D 5e Spells!"} text={text} text2={text2} />
        </Container>
    );
}