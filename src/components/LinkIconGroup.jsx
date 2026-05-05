import React from 'react'
import config from "../config.json"
import styled from 'styled-components';
import LinkIcon from './LinkIcon';

const LinkIconGroup = () => {
    return (
        <SIconGroup>
            {
                config?.links?.map(
                    (link) => { return <LinkIcon item={link} /> }
                )
            }
        </SIconGroup>
    )
}

const SIconGroup = styled.div`
    display: flex;
    column-gap: 8px;
    row-gap: 4px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1;
`

export default LinkIconGroup