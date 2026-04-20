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
    gap: 4px;
`

export default LinkIconGroup