import React from 'react';
import { Card } from 'react-bootstrap';
import HomebrewForm from './homebrew-form';
import QuickAddForm from './quick-add-form';

export default function PageTitleCard(props) {
    const {title, text, quickAdd, quickAddSpell, spell, spellOnChange, homebrew, addSpell} = props;
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text?.map((paragraph) => <p>{paragraph} <br/> </p>)}
                </Card.Text>
            </Card.Body>
            {quickAdd === true
            ?<Card.Footer>
                <Card.Title>Quick Add:</Card.Title>
                <QuickAddForm quickAddSpell={quickAddSpell} spell={spell} spellOnChange={spellOnChange} />
             </Card.Footer>
            :<div hidden></div>
            }
            {homebrew === true
            ?<Card.Footer>
                <HomebrewForm addSpell={addSpell} />
             </Card.Footer>
            :<div hidden></div>
            }
        </Card>
    )
}