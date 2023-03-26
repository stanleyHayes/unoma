import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

const Staff = ({staff}) => {
    return (
        <Card elevation={0} sx={{backgroundColor: "background.default"}}>
            <CardMedia
                component="img"
                sx={{borderRadius: 2, height: 200, objectFit: "cover", objectPosition: "top"}}
                src={staff.image}
            />
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h6" align="center" sx={{color: "text.primary", fontWeight: 600}}>
                        {staff.name}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{color: "text.secondary", fontWeight: 600}}>
                        {`${staff.years_of_experience} year${staff.years_of_experience === 1 ?'': 's'} experience`}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}


export default Staff;