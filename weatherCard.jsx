import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LocationEntry from "./locationEntry";
import locationWeather from "./locationWeather";


const useStyles = makeStyles(() => ({
    root : {
        display: "flex",
        flexDirection: "column",
    }, 
    content: {flex: 1},
}));

function WeatherCard({location, canDelete, onDelete, onUpdate }){
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                {!location && <locationEntry onUpdate={onUpdate} />}
                {location && <locationWeather location={location} />}
            </CardContent>
            <CardActions>
                <Button disabled={!canDelete} onClick={onDelete} size="small" color="primary">
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}

WeatherCard.protoTypes = {
    location: PropTypes.string.isRequired,
    canDelete: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default WeatherCard;