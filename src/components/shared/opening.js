import {Card, CardContent, Grid, Stack, Typography} from "@mui/material";
import moment from "moment";

const Opening = ({opening}) => {
    return (
        <Card
            elevation={0}
            sx={{
                backgroundColor: "background.gray",
                borderRadius: 2,
                "&:hover": {
                    transition: "all 500ms ease-out",
                    backgroundColor: "background.default"
                }
            }}>
            <CardContent>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} lg={4}>
                        <Stack spacing={1}>
                            <Typography variant="h6" sx={{color: "text.primary"}}>
                                {opening.role}
                            </Typography>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                {opening.department}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={12} lg={2}>
                        <Stack spacing={1}>
                            <Typography variant="h6" sx={{color: "text.primary"}}>
                                {opening.experience}
                            </Typography>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Experience
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={12} lg={2}>
                        <Typography variant="h6" sx={{color: "text.title"}}>
                            {opening.type}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} lg={4}>
                        <Stack spacing={1}>
                            <Typography variant="h6" sx={{color: "text.primary"}}>
                                Deadline: {moment(opening.deadline).format("MMM DD, YY")}
                            </Typography>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                {moment(opening.deadline).diff(moment.now(), "days") + 1} {" "} Days Left
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Opening;