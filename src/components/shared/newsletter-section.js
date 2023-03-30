import {Box, Container} from "@mui/material";
import banner from "./../../assets/images/banner/nasa-2W-QWAC0mzI-unsplash.jpg";
import NewsletterForm from "./newsletter-form";

const NewsletterSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundImage: `url(${banner})`,
                minHeight: "30vh",
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.33)",
                backdropFilter: "blur(35px)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                paddingY: 8
            }}>
            <Container>
                <NewsletterForm/>
            </Container>
        </Box>
    )
}

export default NewsletterSection;