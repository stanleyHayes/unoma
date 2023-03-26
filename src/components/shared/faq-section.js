import {Box, Button, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import Service from "./service";
import {LightModeOutlined, NorthEastOutlined} from "@mui/icons-material";

const FAQsSection = () => {

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
                            <Grid item={true} xs={12} md={6}>
                                <Grid container={true} spacing={2}>
                                    <Grid item={true} xs={12} md={6}>
                                        <Service
                                            backgroundColor="light.accent"
                                            icon={
                                                <LightModeOutlined
                                                    sx={{
                                                        color: "colors.accent",
                                                        padding: 1,
                                                        fontSize: 32,
                                                        borderRadius: "100%",
                                                        backgroundColor: "icon.accentBackground"
                                                    }}
                                                />
                                            }
                                            title="Residential cleaning premises"
                                            count={4}
                                        />
                                    </Grid>
                                    <Grid item={true} xs={12} md={6}>
                                        <Service
                                            backgroundColor="light.secondary"
                                            icon={
                                                <LightModeOutlined
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 32,
                                                        borderRadius: "100%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            title="Non-residential cleaning premises"
                                            count={5}
                                        />
                                    </Grid>
                                    <Grid item={true} xs={12} md={6}>
                                        <Service
                                            backgroundColor="light.secondary"
                                            icon={
                                                <LightModeOutlined
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 32,
                                                        borderRadius: "100%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            title="Showcase window cleaning"
                                            count={3}
                                        />
                                    </Grid>
                                    <Grid item={true} xs={12} md={6}>
                                        <Service
                                            backgroundColor="light.secondary"
                                            icon={
                                                <LightModeOutlined
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 32,
                                                        borderRadius: "100%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            title="Dry cleaning furniture"
                                            count={6}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Box>
                                    <Stack
                                        sx={{width: "100%"}}
                                        spacing={2}
                                        divider={<Divider light={true} sx={{py: 1}} variant="fullWidth"/>}>
                                        <Button
                                            fullWidth={true}
                                            endIcon={
                                                <NorthEastOutlined
                                                    sx={{
                                                        color: "secondary.main",
                                                        fontSize: 32
                                                    }}
                                                />
                                            }
                                            variant="text"
                                            sx={{
                                                color: "text.primary",
                                                textTransform: "none",
                                                justifyContent: "space-between"
                                            }}>
                                            General cleaning
                                        </Button>

                                        <Button
                                            fullWidth={true}
                                            endIcon={
                                                <NorthEastOutlined
                                                    sx={{
                                                        color: "secondary.main",
                                                        fontSize: 32
                                                    }}
                                                />
                                            }
                                            variant="text"
                                            sx={{
                                                color: "text.primary",
                                                textTransform: "none",
                                                justifyContent: "space-between"
                                            }}>
                                            Maintenance cleaning
                                        </Button>

                                        <Button
                                            fullWidth={true}
                                            endIcon={
                                                <NorthEastOutlined
                                                    sx={{
                                                        color: "secondary.main",
                                                        fontSize: 32
                                                    }}
                                                />
                                            }
                                            variant="text"
                                            sx={{
                                                color: "text.primary",
                                                textTransform: "none",
                                                justifyContent: "space-between"
                                            }}>
                                            Cleaning after renovation
                                        </Button>

                                        <Button
                                            fullWidth={true}
                                            endIcon={
                                                <NorthEastOutlined
                                                    sx={{
                                                        color: "secondary.main",
                                                        fontSize: 32
                                                    }}
                                                />
                                            }
                                            variant="text"
                                            sx={{
                                                color: "text.primary",
                                                textTransform: "none",
                                                justifyContent: "space-between"
                                            }}>
                                            Cleaning before / after tenants
                                        </Button>
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