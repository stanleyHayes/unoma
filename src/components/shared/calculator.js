import {Box, Grid} from "@mui/material";
import {useState} from "react";

const Calculator = () => {
    const [services] = useState(null);

    return (
        <Box>
            <Grid container={true} spacing={4}>
                <Grid item={true} xs={12} md={9}></Grid>
                <Grid item={true} xs={12} md={3}></Grid>
            </Grid>
        </Box>
    )
}

export default Calculator;