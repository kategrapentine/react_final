import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SpellCard from './spell-card';

export default function SpellList(props) {
    const { spells, list, addSpell, removeSpell, updateSpell, filter } = props;

    return (
        <Row>
            {spells?.map((spell, index) => (
                <Col lg="4">
                    <SpellCard 
                        spell={spell} 
                        index={index} 
                        addSpell={addSpell} 
                        removeSpell={removeSpell} 
                        updateSpell={updateSpell}
                        list={list} 
                    />
                </Col>
            ))}

            {spells.length === 0 && list === false 
            ? <Container className="no-spells"><h5 style={{color: "#ffffff50"}}>You haven't added any spells yet!</h5></Container>
            : <div hidden></div>}
        </Row>
    );
}
