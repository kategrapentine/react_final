import React from 'react';
import { Container} from 'react-bootstrap';
import PageTitleCard from './page-title-card';

export default function Home() {
const titleText = [
    "This is a resource to help you keep track of all your spells in one place. You can browse through all of the spells using the Library and add them to your spellbook.",
    "You can manage your spells in your spellbook and keep track of your prepared spells."
]

const infoText = [
    "Have your spells already picked out, or browse through the Library to find spells. If you know the names of all your spells, you can add them by using the Quick Add feature on the Spellbook page. THere is no restrictions to your spellbook, you can add from any class and however many you want, however if you are playing a character you should make sure that you are following the rules associated with your class or duel class.",
    'By default spells added to your spellbook are "prepared" for use. This feature is to keep track of which spells you want to prepare for the in game day in accordance to your number of spell slots. If you press the "Expend" button it will simply be fated out and put to the bottom of the list. You can prepare the spell again at any time and it will be added to the beginning of the list with the rest of the active spells.',
    "Spells can be removed from your spellbook at any time. If you do decide to delete one of the spells, the browser will ask you for confirmation before doing so.",
    "You can add a custom spell to your spellbook by going to the HomeBrew page."
]

    return (
        <Container fluid>
            <PageTitleCard title={"Welcome!"} text={titleText} />
            <br/>
            <PageTitleCard title={"How to use D&D 5e Spellbook:"} text={infoText} />
        </Container>
    );
}