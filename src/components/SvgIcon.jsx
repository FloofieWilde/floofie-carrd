import { useEffect, useState } from "react";

const SvgIcon = ({ name }) => {
    const [svg, setSvg] = useState("");

    useEffect(() => {
        fetch(`/icons/${name}.svg`)
            .then(res => res.text())
            .then(setSvg);
    }, [name]);

    return (
        <span
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}

export default SvgIcon;