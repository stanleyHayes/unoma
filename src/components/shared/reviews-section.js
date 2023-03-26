import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {LightModeOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Choice from "./choice";

const ReviewsSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            Reviews of our clients{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                about our service.
                            </Typography>
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true}>
                            <Grid item={true} xs={12} md={8}>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    We strive for maximum openness. We will be grateful to you for any truthful feedback
                                    about the work of our company., which you can leave here on the site or using the
                                    links below.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Choice
                                    icon={
                                        <LightModeOutlined
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 40,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground"
                                            }}
                                        />
                                    }
                                    title="Strict adherence to cleaning standards"
                                    description="The most top-end equipment, the most expensive environmentally friendly safe chemicals"
                                />
                            </Grid>

                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item={true} xs={12} md={2}>
                                <Link to="/reviews" style={{textDecoration: "none", width: "100%", display: "block"}}>
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
                                            borderStyle: "solid"
                                        }}>
                                        See More
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

export default ReviewsSection;