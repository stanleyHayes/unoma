import {CardMedia} from "@mui/material";

const Project = ({project}) => {
    return (
        <CardMedia
            component="img"
            src={project.image}
            sx={{
                height: 120,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 2
            }}
        />
    )
}

export default Project;