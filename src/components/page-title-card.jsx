import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import QuickAddForm from './quick-add-form';

export default function PageTitleCard(props) {
    const {title, text, text2, quickAdd, quickAddSpell, spell, spellOnChange} = props;
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <p>{text}</p>
                    <p>{text2}</p>
                </Card.Text>
            </Card.Body>
            {quickAdd === true
            ?<Card.Footer>
                <Card.Title>Quick Add:</Card.Title>
                <QuickAddForm quickAddSpell={quickAddSpell} spell={spell} spellOnChange={spellOnChange} />
             </Card.Footer>
            :<div hidden></div>
            }
        </Card>
    )
}