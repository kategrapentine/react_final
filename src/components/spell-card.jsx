import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import SpellInfo from './spell-info';

export default function SpellCard(props) {
    const { spells, list, addSpell, removeSpell } = props;

    return (
        <Row>
            {spells?.map((spell, index) => (
                <Col lg="6">
                    <Card key={index} className="Card" >
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
                            {}
                            {spell.attack_type !== undefined ? <p><strong>Attack Type:</strong> {spell.attack_type} </p> : <p hidden></p>}
                            {/* <p><strong>Casting Time:</strong> {spell.casting_time} </p> */}
                            <SpellInfo title="Casting Time:" item={spell.casting_time} />
                            {/* <p><strong>Components:</strong> {spell.components.map((component) => `${component} `)} {spell.material !== undefined ? `( ${spell.material} )` : '' } </p> */}
                            <SpellInfo title="Components:" item={`${spell.components.map((component) => `${component}`)} ${spell.material !== undefined ? `(${spell.material})` : '' }`} />
                            <p><strong>Duration:</strong> {spell.duration} </p>
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
                                <Form.Check className="float" size="lg" value={index} defaultChecked /> <label>Prepared:</label> 
                            </Card.Footer>
                        :
                            <br />
                        }
                    </Card>                    
                </Col>
            ))}

            {spells.length === 0 && list === false 
            ? <Container className="no-spells"><h5 style={{color: "#ffffff50"}}>You haven't added any spells yet!</h5></Container>
            : <div hidden></div>}
        </Row>
    );
}
