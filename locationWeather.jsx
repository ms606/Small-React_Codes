import React from "react"; 
import PropTypes from "prop-types";
import { CircularProgress, makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
    headerLine: {
        display: "flex",
        alignItems: "center",
    },
    location: { 
        flex: 1,
    },
    deadLine: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }, 
    description: {
        flex: 1,
    },
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function LoadingIndicator({isLoading}){
    return isLoading ? <CircularProgress /> : null;
};

