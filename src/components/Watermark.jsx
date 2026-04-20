import React from 'react'
import styled from 'styled-components'

const Watermark = () => {
    return (
        <SWatermark>Made with ❤️ and ☕, by <a href="https://github.com/FloofieWilde" target='_blank' rel="noreferrer">Floofie Wilde</a></SWatermark>
    )
}

const SWatermark = styled.span`
    position: absolute;
    bottom: 5px;
    right: 20px;

    color: white;
    font-style: italic;
    font-weight: 600;

    a {
        color: white;
        
        :hover {
            transform: rotate(180deg);
        }
    }
`

export default Watermark