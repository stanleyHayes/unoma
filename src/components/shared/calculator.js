import {Box, Grid} from "@mui/material";
import {useState} from "react";
import {UNOMA_DATA} from "../../utils/data";

const Calculator = () => {

    const [service, setService] = useState(UNOMA_DATA.SERVICES[0]);

    return (
        <Box>
            <Grid container={true} spacing={4}>
                <Grid item={true} xs={12} md={9}></Grid>
                <Grid item={true} xs={12} md={3}>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Calculator;