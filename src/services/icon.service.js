import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import * as SiIcons8 from "react-icons/si";

const iconPacks = {
    Fa: FaIcons,
    Md: MdIcons,
    Io: IoIcons,
    Gi: GiIcons,
    Hi: HiIcons,
    Bs: BsIcons,
    Si: SiIcons8,
};

export function getIcon(iconName) {
    if (!iconName) return null;

    // if dynamic SVG
    if (iconName.startsWith("Cu")) {
        return `./icons/${iconName}.svg`;
    }

    // if img = fallback
    if (iconName.startsWith("./")) {
        return null;
    }

    // if React Icons
    const prefix = Object.keys(iconPacks).find(p =>
        iconName.startsWith(p)
    );

    if (!prefix) return null;

    return iconPacks[prefix][iconName] || null;
}
