import {Box, Grid, Stack, Typography, Container} from "@mui/material";
import {TrendingFlatOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectProjects} from "../../redux/features/projects/projects-slice";
import Project from "./project";

const PortfolioSection = () => {

    const {projects} = useSelector(selectProjects);

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={4}>
                        <Box>
                            <Stack direction="column" spacing={4}>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                        Successfully completed more than{" "}
                                        <Typography
                                            component="span"
                                            variant="h4"
                                            sx={{color: "secondary.main", fontFamily: "RayleighGlamour", fontWeight: 700}}>
                                            +500
                                        </Typography>
                                        {" "}
                                        <Typography
                                            component="span"
                                            variant="h4"
                                            sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                            orders
                                        </Typography>
                                    </Typography>
                                </Box>

                                <Box>
                                    <Grid container={true}>
                                        <Grid item={true} xs={12} md={8}>
                                            <Typography variant="body1" sx={{color: "rgba(255, 255, 255, 0.75)"}}>
                                                We have a professional team. We constantly train our employees and
                                                supervise
                                                their work. We appreciate their decency, ability to work quickly and
                                                accurately.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Grid container={true} spacing={2}>
                            {projects.map((project, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={4} lg={3}>
                                        <Project project={project}/>
                                    </Grid>
                                )
                            })}
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Stack
                                    sx={{height: "100%"}}
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="center">
                                    <TrendingFlatOutlined
                                        sx={{
                                            color: "icon.accent",
                                            padding: 1,
                                            fontSize: 80,
                                            borderRadius: "100%",
                                            backgroundColor: "icon.accentBackground"
                                        }}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default PortfolioSection;