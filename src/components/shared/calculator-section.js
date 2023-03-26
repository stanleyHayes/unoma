import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import Calculator from "./calculator";

const CalculatorSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            You can{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                calculate the cost
                            </Typography>
                            {" "} by yourself
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true}>
                            <Grid item={true} xs={12} md={8}>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    We have a permanent team. We constantly train our employees and supervise their
                                    work. We appreciate their decency, ability to work quickly and accurately.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                       <Calculator />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default CalculatorSection;