import {Stack, Typography} from "@mui/material";

const Stat = ({title, value}) => {
    return (
        <Stack spacing={1}>
            <Typography variant="body1" align="center" sx={{color:" rgba(255, 2555, 255, 0.75)"}}>
                {title}
            </Typography>
            <Typography variant="h4" align="center" sx={{color: "white", fontWeight: 700}}>
                {value}
            </Typography>
        </Stack>
    )
}

export default Stat;