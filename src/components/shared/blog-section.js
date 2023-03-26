import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectArticles} from "../../redux/features/articles/articles-slice";
import Article from "./article";

const BlogSection = () => {

    const {articles} = useSelector(selectArticles);

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            Our home cleaning {" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                blog
                            </Typography>
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true}>
                            <Grid item={true} xs={12} md={8}>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    We research and find the best tools, equipments, chemicals and the proper ways to
                                    clean an office, a house, furniture and many other. We don't forget to share our
                                    findings with you through our blog.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2}>
                            {articles?.map((article, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={3}>
                                        <Article article={article} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item={true} xs={12} md={2}>
                                <Link to="/articles" style={{textDecoration: "none", width: "100%", display: "block"}}>
                                    <Button
                                        fullWidth={true}
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            textTransform: "none",
                                            color: "colors.accent",
                                            borderRadius: 2,
                                            borderWidth: 2,
                                            borderColor: "colors.accent",
                                            borderStyle: "solid",
                                            fontFamily: "OgelicRegular"
                                        }}>
                                        Go to the Blog
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

export default BlogSection;