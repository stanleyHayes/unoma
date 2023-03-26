import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {
    GroupOutlined,
    LightModeOutlined,
    PixOutlined,
    WorkspacePremiumOutlined,
    WorkspacesOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Choice from "./choice";

const ChoicesSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            Reasons to{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                choose
                            </Typography>
                            {" "}us
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true}>
                            <Grid item={true} xs={12} md={8}>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    To achieve maximum results, we use the est chemistry and equipment. We control the
                                    work of our employees and adhere to cleaning standards. We always fulfill our
                                    obligations and guarantee deadlines, safety and quality.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2}>
                            <Grid item={true}  xs={12} md={6} lg={3}>
                                <Choice
                                    icon={
                                        <GroupOutlined
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 40,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground"
                                            }}
                                        />
                                    }
                                    title="The team of professionals"
                                    description="The most top-end equipment, the most expensive environmentally friendly safe chemicals"
                                />
                            </Grid>
                            <Grid item={true}  xs={12} md={6} lg={3}>
                                <Choice
                                    icon={
                                        <WorkspacePremiumOutlined
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 40,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground"
                                            }}
                                        />
                                    }
                                    title="Our approach to pricing"
                                    description="The most top-end equipment, the most expensive environmentally friendly safe chemicals"
                                />
                            </Grid>
                            <Grid item={true}  xs={12} md={6} lg={3}>
                                <Choice
                                    icon={
                                        <PixOutlined
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 40,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground"
                                            }}
                                        />
                                    }
                                    title="Guaranteed quality of cleaning"
                                    description="The most top-end equipment, the most expensive environmentally friendly safe chemicals"
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Choice
                                    icon={
                                        <WorkspacesOutlined
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
                                <Link to="/contact" style={{textDecoration: "none", width: "100%", display: "block"}}>
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
                                            fontFamily: "OgelicRegular"
                                        }}>
                                        Contact Us
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

export default ChoicesSection;