import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function HomebrewForm(props) {
    const {addSpell} = props;

    const [castingTime, setCastingTime] = useState("N/A");
    const [classes, setClasses] = useState([{name: 'N/A'}]);
    const [components, setComponents] = useState(["N/A"]);
    const [desc, setDesc] = useState(["N/A"]);
    const [duration, setDuration] = useState("N/A");
    const [level, setLevel]= useState(0);
    const [name, setName] = useState("N/A");
    const [range, setRange]= useState("N/A");
    const [ritual, setRitual] = useState(false);
    const [school, setSchool] = useState({name: "Abjuration"});

    const onClick = (e) => {
        e.preventDefault();
        let spell = {
            casting_time: castingTime,
            classes: classes,
            components: components,
            desc: desc,
            duration: duration,
            level: Number(level),
            name: name,
            range: range,
            ritual: ritual,
            school: school
        }
        console.log(spell);
        addSpell(spell);
    }

    return (
        <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={(e) => {e.preventDefault(); setName(e.target.value)}} placeholder="Enter Spell Name"/>
            <Row>
                <Col>
                    <Form.Label>Select Level</Form.Label>
                    <Form.Control as="select" onChange={(e) => {e.preventDefault(); setLevel(e.target.value)}}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Select School</Form.Label>
                    <Form.Control as="select" onChange={(e) => {e.preventDefault(); setSchool({name: e.target.value})}}>
                        <option>Abjuration</option>
                        <option>Conjuration</option>
                        <option>Divination</option>
                        <option>Enchantment</option>
                        <option>Evocation</option>
                        <option>Illusion</option>
                        <option>Necromancy</option>
                        <option>Transmutation</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Range</Form.Label>
                    <Form.Control onChange={(e) => {e.preventDefault(); setRange(e.target.value)}} placeholder="Enter Range ex. 5ft cone"/>                
                </Col>
                <Col>
                    <Form.Label>Duration</Form.Label>
                    <Form.Control onChange={(e) => {e.preventDefault(); setDuration(e.target.value)}} placeholder="Enter Duration ex. 1 hour"/>                
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Casting Time</Form.Label>
                    <Form.Control onChange={(e) => {e.preventDefault(); setCastingTime(e.target.value)}} placeholder="Enter Casting Time ex. 1 action"/>                
                </Col>
                <Col>
                    <Form.Label>Components</Form.Label>
                    <Form.Control onChange={(e) => {e.preventDefault(); setComponents([e.target.value])}} placeholder="Enter Components ex. V S (a string)"/>                
                </Col>
            </Row>
            <Form.Label>Classes</Form.Label>
            <Form.Control onChange={(e) => {e.preventDefault(); setClasses([{name: e.target.value}])}} placeholder="Enter Class or Classes ex. Wizard"/>                
            <Form.Label>Description</Form.Label>
            <Form.Control  as="textarea" rows="5" onChange={(e) => {e.preventDefault(); setDesc([e.target.value])}}/>
            <Form.Check label="Ritual" onChange={(e) => {e.preventDefault(); setRitual(!ritual)}} />
            <br/>
            <Button onClick={onClick}>Submit</Button>
        </Form>
    )
}