import React from 'react';

export default function SpellInfo(props) {
    const { title, item } = props;
    return (
        <p><strong>{title}</strong> {item} </p>
    )
}