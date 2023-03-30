import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectOpenings} from "../../redux/features/openings/openings-slice";
import Opening from "./opening";

const OpeningSection = () => {

    const {openings} = useSelector(selectOpenings);

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            Current{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                job
                            </Typography>
                            {" "}openings
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true}>
                            <Grid item={true} xs={12} md={8}>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    Know your worth and find the job that qualify your lif.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Stack spacing={2}>
                            {openings.map((opening, index) => {
                                return (
                                    <Box key={index}>
                                        <Opening opening={opening}/>
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item={true} xs={12} md={2}>
                                <Link to="#" style={{textDecoration: "none", width: "100%", display: "block"}}>
                                    <Button
                                        fullWidth={true}
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            textTransform: "capitalize",
                                            color: "colors.accent",
                                            borderRadius: 2,
                                            borderWidth: 2,
                                            borderColor: "colors.accent",
                                            borderStyle: "solid",
                                            fontWeight: 700,
                                            fontFamily: "SatrevaNova"
                                        }}>
                                        View Openings
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default OpeningSection;