import styled from "styled-components";
import { getIcon } from "../services/icon.service";
import { Tooltip } from "react-tooltip";
import config from "../config.json"
import { ReactSVG } from "react-svg";

const LinkIcon = ({ item }) => {
    const Icon = getIcon(item.icon);

    return (
        <SLinkIcon href={item.link} target="_blank" data-tooltip-id={'tt' + item.icon} data-tooltip-content={item.title}>
            {Icon && !(typeof Icon === "string") && <Icon alt={item.title} style={{ color: item.color }} />}
            {Icon && typeof Icon === "string" && <ReactSVG src={Icon} style={{ color: item.color }} />}
            {!Icon && <SImgIcon src={item.icon} alt={item.title} />}
            <Tooltip id={'tt' + item.icon} />
        </SLinkIcon>
    );
}

const SLinkIcon = styled.a`

    color: ${config.globalIconColor ?? 'black'};
    height: auto;
    width: auto;
    
    :hover {
        color: ${config?.globalIconHoverColor ?? undefined};
        transition: all ease-in-out .1s;
    }

    * {
        height: 2.5rem;
        width: auto;
        transition: all ease-in-out .1s;
    }
`

const SImgIcon = styled.img``

export default LinkIcon;