import {Box, Button, Divider, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import NavigationLink from "./navigation-link";
import {AnimatePresence, motion} from "framer-motion";
import {CloseOutlined, DarkModeOutlined, LightModeOutlined, WifiCalling3Outlined} from "@mui/icons-material";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const DrawerContent = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{py: 4}}>
            <Stack
                direction="column"
                divider={<Divider sx={{my: 4}} variant="fullWidth" light={true}/>}>
                <Stack
                    sx={{px: 4}}
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between">
                    <CloseOutlined
                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(false))}
                        sx={{
                            color: "colors.accent",
                            padding: 1,
                            fontSize: 20,
                            borderRadius: "100%",
                            cursor: "pointer",
                            borderWidth: 0.5,
                            borderStyle: "solid",
                            borderColor: "colors.accent"
                        }}/>

                    <AnimatePresence initial={true} mode="sync">
                        {theme === "dark" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <LightModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 20,
                                        borderRadius: "100%",
                                        cursor: "pointer",
                                        borderWidth: 0.5,
                                        borderStyle: "solid",
                                        borderColor: "colors.accent"
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
                                        padding: 1,
                                        fontSize: 20,
                                        borderRadius: "100%",
                                        cursor: "pointer",
                                        borderWidth: 0.5,
                                        borderStyle: "solid",
                                        borderColor: "colors.accent"
                                    }}/>
                            </Box>
                        )}
                    </AnimatePresence>
                </Stack>

                <Box sx={{px: 4}}>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Typography
                            variant="h4"
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
                </Box>

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={3}>
                        <NavigationLink path="/" label="Home"/>
                        <NavigationLink path="/services" label="Our Services"/>
                        <NavigationLink path="/calculator" label="Calculator"/>
                        <NavigationLink path="/reviews" label="Reviews"/>
                        <NavigationLink path="/articles" label="Our Blog"/>
                        <NavigationLink path="/faqs" label="FAQ's"/>
                    </Stack>
                </Box>

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <MUILink href="tel://+380334268644" underline="none">
                                <WifiCalling3Outlined
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 20,
                                        borderRadius: "100%",
                                        borderWidth: 0.5,
                                        borderStyle: "solid",
                                        borderColor: "colors.accent"
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
                        <Link to="/contact" style={{textDecoration: "none", width: "100%", display: "block"}}>
                            <Button
                                fullWidth={true}
                                variant="outlined"
                                size="large"
                                sx={{
                                    textTransform: "capitalize",
                                    color: "colors.accent",
                                    borderRadius: 8,
                                    borderWidth: 1,
                                    borderColor: "colors.accent",
                                    borderStyle: "solid"
                                }}>
                                Contact Us
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default DrawerContent;