import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CardMedia,
    Link as MUILink,
    Stack,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import {South} from "@mui/icons-material";
import logo from "./../../assets/images/logo/logo.png";

const MobileFooter = () => {
    return (
        <Box>
            <Stack spacing={1}>
                <Accordion square={true} sx={{backgroundColor: "colors.footer"}}>
                    <AccordionSummary  sx={{backgroundColor: "colors.footer"}} expandIcon={<South
                        sx={{
                            color: "icon.secondary",
                            padding: 1,
                            fontSize: 32,
                            borderRadius: "100%",
                        }}
                    />}>
                        <Typography
                            variant="h4"
                            sx={{
                                textTransform: "uppercase",
                                color: "white",
                                fontWeight: 700,
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4
                            }}>
                            Unona
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "colors.footer"}}>
                        <CardMedia
                            src={logo}
                            sx={{
                                height: 150,
                                objectPosition: "center",
                                objectFit: "contain"
                            }}
                            component="img"
                        />
                    </AccordionDetails>
                </Accordion>

                <Accordion square={true} sx={{backgroundColor: "colors.footer"}}>
                    <AccordionSummary  sx={{backgroundColor: "colors.footer"}} expandIcon={<South
                        sx={{
                            color: "icon.secondary",
                            padding: 1,
                            fontSize: 32,
                            borderRadius: "100%",
                        }}
                    />}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Main
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "colors.footer"}}>
                        <Stack spacing={2}>
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
                    </AccordionDetails>
                </Accordion>
                <Accordion square={true} sx={{backgroundColor: "colors.footer"}}>
                    <AccordionSummary  sx={{backgroundColor: "colors.footer"}} expandIcon={<South
                        sx={{
                            color: "icon.secondary",
                            padding: 1,
                            fontSize: 32,
                            borderRadius: "100%",
                        }}
                    />}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Cleaning
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "colors.footer"}}>
                        <Stack spacing={2}>

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
                    </AccordionDetails>
                </Accordion>
                <Accordion square={true} sx={{backgroundColor: "colors.footer"}}>
                    <AccordionSummary  sx={{backgroundColor: "colors.footer"}} expandIcon={<South
                        sx={{
                            color: "icon.secondary",
                            padding: 1,
                            fontSize: 32,
                            borderRadius: "100%",
                        }}
                    />}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Our Contacts
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "colors.footer"}}>
                        <Stack spacing={2}>
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
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Box>
    )
}

export default MobileFooter;