import React from "react";
import { Container } from "react-bootstrap";
import PageTitleCard from "./page-title-card";

export default function Homebrew(props) {
    const {addSpell} = props;
    const text = [
        'This is the homebrew page, here you can fill out a form to add a custom spell to your spellbook.',
        "You will not be able to edit the spell once it is created, so make sure you have filled out the fields you need. Make sure to store your spell information elsewhere if you want to save it. Stay on the page or the fields will be erased."
    ]
    return (
        <Container fluid>
            <PageTitleCard title="Homebrew a Spell" text={text} homebrew={true} addSpell={addSpell}  />
        </Container>
    )
}