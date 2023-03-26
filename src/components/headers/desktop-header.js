import {Box, Button, Grid, Link as MUILink, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import NavigationLink from "../shared/navigation-link";
import {DarkModeOutlined, LightModeOutlined, WifiCalling3Outlined} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const DesktopHeader = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Toolbar
            sx={{
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "divider"
            }}>
            <Grid container={true} alignItems="center" justifyContent="space-around">
                <Grid item={true}>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Typography
                            variant="h4"
                            sx={{
                                textTransform: "uppercase",
                                color: "colors.accent",
                                fontWeight: 700,
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4
                            }}>
                            Unona
                        </Typography>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <NavigationLink path="/" label="Home"/>
                        <NavigationLink path="/services" label="Our Services"/>
                        <NavigationLink path="/calculator" label="Calculator"/>
                        <NavigationLink path="/reviews" label="Reviews"/>
                        <NavigationLink path="/articles" label="Our Blog"/>
                        <NavigationLink path="/faqs" label="FAQ's"/>
                    </Stack>
                </Grid>

                <Grid item={true}>
                    <Stack direction="row" spacing={4} alignItems="center">
                        <AnimatePresence initial={true} mode="sync">
                            {theme === "dark" && (
                                <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                    <LightModeOutlined
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        sx={{
                                            color: "colors.accent",
                                            padding: 1,
                                            fontSize: 32,
                                            borderRadius: "100%",
                                            cursor: "pointer",
                                            backgroundColor: "icon.accentBackground"
                                        }}
                                    />
                                </Box>
                            )}
                        </AnimatePresence>
                        <AnimatePresence initial={true} mode="sync">
                            {theme === "light" && (
                                <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                    <DarkModeOutlined
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        sx={{
                                            color: "colors.accent",
                                            padding: 1,
                                            fontSize: 32,
                                            borderRadius: "100%",
                                            cursor: "pointer",
                                            backgroundColor: "icon.accentBackground"
                                        }}/>
                                </Box>
                            )}
                        </AnimatePresence>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <MUILink href="tel://+380334268644" underline="none">
                                <WifiCalling3Outlined
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "100%",
                                        backgroundColor: "icon.accentBackground"
                                    }}/>
                            </MUILink>
                            <MUILink href="tel://+380334268644" underline="none">
                                <Button
                                    variant="text"
                                    size="large"
                                    sx={{
                                        textTransform: "capitalize",
                                        color: "colors.accent",
                                        cursor: "pointer"
                                    }}>
                                    +38 033-426 86 44
                                </Button>
                            </MUILink>
                        </Stack>
                        <Link to="/contact" style={{textDecoration: "none"}}>
                            <Button
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
                                Contact Us
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader