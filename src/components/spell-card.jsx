import React from "react";
import { Button, ButtonGroup, Card, ToggleButton } from "react-bootstrap";

export default function SpellCard(props) {
    const {spell, index, removeSpell, addSpell, updateSpell, list} = props;

    const styles = {
        'background-color': `${spell.prepared === false ? "#ffffff75" : "white"}`,
        height: "95%"
    };

    return (
        <Card key={index} style={styles}  >
            <Card.Header>
                <Card.Title>{spell.name}<span className="school"> Lv. {spell.level} - {spell.school.name} spell</span> 
                    {list === false 
                    ? 
                    <Button 
                        className="float" 
                        variant="danger"
                        value="index"
                        onClick={(e) => {e.preventDefault(); removeSpell(index, spell)}}
                    >
                        Remove
                    </Button> 
                    : 
                    <Button 
                        variant="primary" 
                        className="float"
                        value={spell} 
                        onClick={(e) => {e.preventDefault(); addSpell(spell)}}
                    >
                        +
                    </Button>} 
                </Card.Title>
            
            </Card.Header>
            < Card.Body >
                {spell.ritual === true ? <p><strong>Ritual Spell</strong></p> : <p hidden></p>}
                {spell.attack_type !== undefined ? <p><strong>Attack Type:</strong> {spell.attack_type} </p> : <p hidden></p>}
                <p><strong>Casting Time:</strong> {spell.casting_time} </p>
                <p><strong>Components:</strong> {spell.components.map((component) => `${component} `)} {spell.material !== undefined ? `( ${spell.material} )` : '' } </p>
                <p><strong>Duration:</strong> {spell.concentration === true ? "Concentration," : ''} {spell.duration} </p>
                <p><strong>Range:</strong> {spell.range} {spell.area_of_effect !== undefined ? `(${spell.area_of_effect.size}ft ${spell.area_of_effect.type})` : '' } </p>
                <p><strong>Classes:</strong> {spell.classes.map((element, index) => index !== spell.classes.length - 1  ? `${element.name}, ` : `${element.name} `)} </p>
                <hr />
                {spell.desc.map((des) => (<p>{des}<br/></p>))}
                <p> {spell.higher_level} </p>
            </Card.Body>
            <br/>
            <br/>
            <br/>
            {list === false 
            ? 
                <Card.Footer className="spell-footer">
                    <ButtonGroup toggle >
                        <ToggleButton 
                            type="checkbox"
                            value={index}
                            className="float"
                            onChange={(e) => {e.preventDefault(); updateSpell(index)}}
                            > {spell.prepared === true ? "Expend" : "Prepare"}
                        </ToggleButton>                                    
                    </ButtonGroup>
                </Card.Footer>
            :
                <br />
            }
        </Card>  
    )
}