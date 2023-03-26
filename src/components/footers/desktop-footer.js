import {Box, Grid, Stack, Typography, Link as MUILink, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const DesktopFooter = () => {
    return (
        <Box>
            <Grid container={true} spacing={4}>
                <Grid item={true} lg={3}>
                    <Stack spacing={3}>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontWeight: 700,
                                    fontFamily: "SatrevaNova",
                                    letterSpacing: 1.4,
                                }}>
                                Unona
                            </Typography>
                        </Link>
                        <Box>
                            <Stack justifyContent="flex-start" direction="row" spacing={3}>
                                <CardMedia
                                    src={logo}
                                    sx={{
                                        height: 150,
                                        objectPosition: "center",
                                        objectFit: "contain"
                                    }}
                                    component="img"
                                />
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Main
                        </Typography>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                About company
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Our chemicals
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Our equipment
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Work
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Contacts
                            </Typography>
                        </Link>
                    </Stack>

                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Cleaning
                        </Typography>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                After pest control
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Post-construction
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                After tenants
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Premises
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Dry cleaning of furniture
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Our Contacts
                        </Typography>
                        <Box>
                            <Stack direction="row" spacing={4}>
                                <Typography variant="body2" sx={{color: "white"}}>
                                    Phone:
                                </Typography>
                                <MUILink href="tel://+380334268644" style={{textDecoration: "none"}}>
                                    <Typography variant="body2" sx={{color: "white", fontWeight: "bold"}}>
                                        +38 033-426 86 44
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={4}>
                                <Typography variant="body2" sx={{color: "white"}}>
                                    Address:
                                </Typography>
                                <MUILink href="#" style={{textDecoration: "none"}}>
                                    <Typography variant="body2" sx={{color: "white", fontWeight: "bold"}}>
                                        Kyiv,Vidradnyi avenue 55
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={4}>
                                <Typography variant="body2" sx={{color: "white"}}>
                                    Email:
                                </Typography>
                                <MUILink href="mailto://info@unonacleaning.com" style={{textDecoration: "none"}}>
                                    <Typography variant="body2" sx={{color: "white", fontWeight: "bold"}}>
                                        info@unonacleaning.com
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DesktopFooter;