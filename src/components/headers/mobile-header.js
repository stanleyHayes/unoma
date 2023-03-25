import {Box, Grid, Link as MUILink, Toolbar, Typography, Stack} from "@mui/material";
import {DarkModeOutlined, LightModeOutlined, Menu, WifiCalling3Outlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";

const MobileHeader = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Toolbar
            sx={{
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "divider"
            }}
        >
            <Grid container={true} alignItems="center" justifyContent="space-between">
                <Grid item={true}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Menu
                            onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(true))}
                            sx={{
                                color: "colors.accent",
                                borderWidth: 0.5,
                                borderStyle: "solid",
                                borderColor: "colors.accent",
                                padding: 1,
                                fontSize: 32,
                                borderRadius: "100%",
                                backgroundColor: "icon.accentBackground"
                            }}/>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Typography
                                variant="h6"
                                sx={{
                                    textTransform: "uppercase",
                                    color: "colors.accent",
                                    fontWeight: 700,
                                    fontFamily: "RayleighGlamour",
                                    letterSpacing: 1.4
                                }}>
                                Unona
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item={true}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <MUILink href="tel://+380334268644" underline="none">
                            <WifiCalling3Outlined
                                sx={{
                                    color: "colors.accent",
                                    borderWidth: 0.5,
                                    borderStyle: "solid",
                                    borderColor: "colors.accent",
                                    padding: 1,
                                    fontSize: 32,
                                    borderRadius: "100%",
                                    backgroundColor: "icon.accentBackground"
                                }}/>
                        </MUILink>
                        <AnimatePresence initial={true} mode="sync">
                            {theme === "dark" && (
                                <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                    <LightModeOutlined
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        sx={{
                                            color: "colors.accent",
                                            borderWidth: 0.5,
                                            borderStyle: "solid",
                                            borderColor: "colors.accent",
                                            padding: 1,
                                            fontSize: 32,
                                            borderRadius: "100%",
                                            backgroundColor: "icon.accentBackground"
                                        }}/>
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
                                            borderWidth: 0.5,
                                            borderStyle: "solid",
                                            borderColor: "colors.accent",
                                            padding: 1,
                                            fontSize: 32,
                                            borderRadius: "100%",
                                            backgroundColor: "icon.accentBackground"
                                        }}/>
                                </Box>
                            )}
                        </AnimatePresence>
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;