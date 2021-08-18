import React from 'react'
import { Typography, Slider, Popper, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: '20px 40px',
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(1),
    },
    formControl: {
        minWidth: 180,
        width: '100%',
        marginBottom: 40,
    },
}));

export default function FilterItems({ id, open, anchorEl }) {
    const classes = useStyles()

    const [value, setValue] = React.useState([20, 40]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Popper id={id} open={open} anchorEl={anchorEl} >
            <div className={classes.paper}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={10}>Recomended</MenuItem>
                        <MenuItem value={20}>Fastest delivery</MenuItem>
                        <MenuItem value={30}>Most Popular</MenuItem>
                    </Select>
                </FormControl>
                <Typography gutterBottom style={{ marginBottom: 40 }}>
                    Price range
                </Typography>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                />
                <div>
                    <Button variant='contained' color='primary'>Apply</Button>
                </div>
            </div>
        </Popper >
    )
}
