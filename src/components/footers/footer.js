import {Box} from "@mui/material";
import DesktopFooter from "./desktop-footer";
import MobileFooter from "./mobile-footer";

const Footer = () => {
    return (
        <Box>
            <Box>
                <DesktopFooter/>
            </Box>
            <Box>
                <MobileFooter />
            </Box>
        </Box>
    )
}

export default Footer;