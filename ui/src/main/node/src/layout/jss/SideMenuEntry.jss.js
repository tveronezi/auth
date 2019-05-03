import injectSheet from "react-jss";
import {highlighed, transitionDuration} from "./CommonStyles";

const animationLength = 2;
const styles = (theme) => ({
    root: {
        display: "flex",
        textDecoration: "none",
        color: theme.palette.text.primary,
        borderRadius: 20,
        margin: `${theme.spacing.unit}px 0`,
        padding: theme.spacing.unit,
        "&:hover": {
            cursor: "pointer",
            backgroundColor: highlighed,
            "& .arrow": {
                animation: `arrow ${transitionDuration * 2}ms 1`
            }
        },
    },
    '@keyframes arrow': {
        "0%": {
            transform: "translate(0px, 0px)"
        },
        "25%": {
            transform: `translate(-${animationLength}px, 0px)`
        },
        "50%": {
            transform: "translate(0px, 0px)"
        },
        "75%": {
            transform: `translate(${animationLength}px, 0px)`
        },
        "100%": {
            transform: "translate(0px, 0px)"
        }
    },
    panelCollapsed: {
        borderRadius: 0,
    },
    icon: {
        display: "flex",
        alignItems: "center",
    },
    details: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: `0 0 0 ${theme.spacing.unit}px`,
        overflow: "hidden",
        "& > div": {
            display: "flex",
            alignItems: "center",
        }
    },
    detailsCollapsed: {
        display: "none"
    },
    text: {
        whiteSpace: "nowrap"
    }
});

export default ((cls) => injectSheet(styles)(cls));