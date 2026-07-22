import styled from "styled-components";
import { getIcon } from "../services/icon.service";
import { Tooltip } from "react-tooltip";
import config from "../config.json"
import { ReactSVG } from "react-svg";

const LinkIcon = ({ item }) => {
    const Icon = getIcon(item.icon);
    const hasLink = Boolean(item?.link);
    const tooltipId = item?.icon ? `tt-${item.icon}` : undefined;

    return (
        <SLinkIcon
            as={hasLink ? 'a' : 'span'}
            href={hasLink ? item.link : undefined}
            target={hasLink ? '_blank' : undefined}
            rel={hasLink ? 'noreferrer' : undefined}
            data-tooltip-id={tooltipId}
            data-tooltip-content={item.title}
        >
            {Icon && !(typeof Icon === "string") && <Icon alt={item.title} style={{ color: item.color }} />}
            {Icon && typeof Icon === "string" && <ReactSVG src={Icon} style={{ color: item.color }} />}
            {!Icon && <SImgIcon src={item.icon} alt={item.title} />}
            {tooltipId && <Tooltip id={tooltipId} />}
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