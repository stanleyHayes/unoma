import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import moment from "moment/moment";

const Article = ({article}) => {
    return (
        <Card sx={{backgroundColor: "background.default", height: "100%"}} elevation={0}>
            <CardContent>
                <CardMedia
                component="img"
                src={article.image}
                sx={{
                    height: 250,
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: 2,
                    mb: 2
                }}
                />
                <Typography variant="body2" sx={{color: "text.secondary", mb: 2}}>
                    {moment(article.created_at).fromNow()}
                </Typography>

                <Typography variant="body1" sx={{color: "text.primary", fontWeight: 700}}>
                    {article.title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Article;