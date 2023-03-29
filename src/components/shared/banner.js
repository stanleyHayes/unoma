import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {UNOMA_DATA} from "../../utils/data";
import Carousel from "react-material-ui-carousel";

const Banner = () => {

    return (
        <Box sx={{width: "100%", minHeight: "50vh", alignItems: "center", display: "flex"}}>
            <Container maxWidth="xl">
                <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                    <Grid item={true} xs={12} md={6} lg={5}>
                        <Box>
                            <Stack spacing={4}>
                                <Typography variant="h2" sx={{color: "text.primary", fontWeight: 800}}>
                                    We'll{" "}
                                    <Typography
                                        component="span"
                                        variant="h2"
                                        sx={{
                                            color: "colors.accent",
                                            backgroundColor: "light.accent",
                                            fontWeight: 800,
                                            px: 1,
                                            fontFamily: "SatrevaNova",
                                            borderRadius: 2
                                        }}>
                                        help
                                    </Typography>
                                    {" "}you{" "}
                                    <Typography
                                        component="span"
                                        variant="h2"
                                        sx={{
                                            color: "secondary.main",
                                            backgroundColor: "light.secondary",
                                            fontWeight: 800,
                                            px: 1,
                                            fontFamily: "SatrevaNova",
                                            borderRadius: 2
                                        }}>
                                        clean
                                    </Typography>
                                    {" "}your place.
                                </Typography>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    Contact us and we will use all our strength and knowledge to fill your home with
                                    comfort
                                    of
                                    cleanliness
                                </Typography>
                                <Box>
                                    <Grid container={true} spacing={2}>
                                        <Grid item={true} xs={12} md={4}>
                                            <Link
                                                to="/contact"
                                                style={{textDecoration: "none", width: "100%", display: "block"}}>
                                                <Button
                                                    fullWidth={true}
                                                    size="large"
                                                    disableElevation={true}
                                                    sx={{
                                                        textTransform: "capitalize",
                                                        color: "white",
                                                        borderRadius: 2,
                                                        fontWeight: 700,
                                                        backgroundColor: "secondary.main",
                                                        fontFamily: "SatrevaNova"
                                                    }}>
                                                    Contact Us
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item={true} xs={12} md={4}>
                                            <Link
                                                to="#"
                                                style={{textDecoration: "none", width: "100%", display: "block"}}>
                                                <Button
                                                    fullWidth={true}
                                                    size="large"
                                                    disableElevation={true}
                                                    sx={{
                                                        textTransform: "capitalize",
                                                        color: "secondary.main",
                                                        borderRadius: 2,
                                                        fontWeight: 700,
                                                        borderColor: "secondary.main",
                                                        borderStyle: "solid",
                                                        borderWidth: 2,
                                                        fontFamily: "SatrevaNova"
                                                    }}>
                                                    Schedule Call
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Carousel
                            autoPlay={true}
                            stopAutoPlayOnHover={true}
                            duration={3000}
                            indicators={false}
                            cycleNavigation={true}>
                            {UNOMA_DATA.BANNER_SLIDER_IMAGES.map((image, index) => {
                                return (
                                    <Box key={index}>
                                        <CardMedia
                                            component="img"
                                            src={image}
                                            sx={{
                                                borderTopLeftRadius: 64,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 64,
                                                borderBottomLeftRadius: 0,
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                width: "100%",
                                                height: {xs: 250, lg: 350}
                                            }}
                                        />
                                    </Box>
                                )
                            })}
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner;