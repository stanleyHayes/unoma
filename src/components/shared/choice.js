import {Box, Card, CardContent, Typography} from "@mui/material";

const Choice = ({icon, title, description}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                borderWidth: 2,
                borderColor: "light.secondary",
                backgroundColor: "background.default",
                height: "100%",
                borderRadius: 2,
                '&:hover': {
                    transition: "500ms all ease-out",
                    borderWidth: 2,
                    borderColor: "light.accent",
                    borderRadius: 4
                }
        }}>
            <CardContent>
                <Box sx={{mb: 3}}>
                    {icon}
                </Box>
                <Typography variant="h6" sx={{color: "text.primary", fontWeight: 700}}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{color: "text.secondary"}}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Choice;