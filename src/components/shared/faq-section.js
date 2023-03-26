import {Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectFAQs} from "../../redux/features/faqs/faqs-slice";
import FAQ from "./faq";

const FAQsSection = () => {

    const {faqs} = useSelector(selectFAQs);

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            Answer to{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                FAQs
                            </Typography>
                            {" "}from our customers
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
                        <Grid container={true} spacing={4} justifyContent="space-between">
                            <Grid item={true} xs={12} md={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{backgroundColor: "light.accent", borderRadius: 2}}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{color: "text.primary", fontWeight: 700, mb: 2}}>
                                            Couldn't find an answer to your question?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 4}}>
                                            Please leave a request and we will contact you shortly.
                                        </Typography>
                                        <Link to="/contact" style={{textDecoration: "none"}}>
                                            <Button
                                                disableElevation={true}
                                                variant="contained"
                                                size="large"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    color: "white",
                                                    backgroundColor: "colors.footer",
                                                    fontFamily: "OgelicRegular"
                                                }}>
                                                Contact Us
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={5}>
                                <Box>
                                    <Stack
                                        sx={{width: "100%"}}
                                        spacing={2}
                                        divider={<Divider light={true} variant="fullWidth"/>}>
                                        {faqs.map((faq, index) => {
                                            return (
                                                <Box key={index}>
                                                    <FAQ faq={faq}/>
                                                </Box>
                                            )
                                        })}
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default FAQsSection;