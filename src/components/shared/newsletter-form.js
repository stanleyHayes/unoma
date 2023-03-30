import {
    Box,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    Grid,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {MailOutlined, Person2Outlined, SendOutlined} from "@mui/icons-material";
import {motion} from "framer-motion";

const NewsletterForm = () => {

    const formik = useFormik({
        initialValues: {name: "", email: ""},
        validationSchema: yup.object().shape({
            name: yup.string().required("Field required"),
            email: yup.string().email("Enter valid email").required("Field required"),
        })
    });

    return (
        <Box>
            <Grid
                component={motion.div}
                container={true}
                spacing={4}
                alignItems="center"
                justifyContent="space-between">
                <Grid
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    initial={{
                        x: "-10vw",
                        opacity: 0,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    component={motion.div}
                    item={true}
                    xs={12}
                    md={6}>
                    <Typography
                        variant="h4"
                        sx={{color: "text.primary", fontWeight: 700, mb: 3, fontFamily: "SatrevaNova"}}>
                        <Typography
                            component="span"
                            variant="h4"
                            sx={{color: "colors.accent", fontWeight: 700, mb: 3, fontFamily: "SatrevaNova"}}>
                            Sign me up{" "}
                        </Typography>
                        <Typography
                            component="span"
                            variant="h4"
                            sx={{color: "white", fontWeight: 700, mb: 3, fontFamily: "SatrevaNova"}}>
                            for{" "}
                        </Typography>
                        <Typography
                            component="span"
                            variant="h4"
                            sx={{color: "secondary.main", fontWeight: 700, mb: 3, fontFamily: "SatrevaNova"}}>
                            News{" "}
                        </Typography>
                        <Typography
                            component="span"
                            variant="h4"
                            sx={{color: "white", fontWeight: 700, mb: 3, fontFamily: "SatrevaNova"}}>
                            and{" "}
                        </Typography>
                        <Typography
                            component="span"
                            variant="h4"
                            sx={{color: "secondary.main", fontWeight: 700, mb: 3, fontFamily: "SatrevaNova"}}>
                            Updates
                        </Typography>
                    </Typography>
                </Grid>
                <Grid
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    initial={{
                        x: "10vw",
                        opacity: 0,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    component={motion.div}
                    item={true}
                    xs={12}
                    md={6}>
                    <Card
                        elevation={0}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(5px)",
                            borderRadius: 4
                        }}>
                        <CardContent>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container={true} spacing={2}>
                                    <Grid item={true} xs={12} md={6}>
                                        <FormControl fullWidth={true} variant="outlined">
                                            <OutlinedInput
                                                value={formik.values.name}
                                                placeholder="Your Name"
                                                name="name"
                                                sx={{
                                                    borderRadius: 3,
                                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                                }}
                                                inputProps={{
                                                    style: {color: "white"}
                                                }}
                                                startAdornment={
                                                    <Person2Outlined
                                                        sx={{fontSize: 20, mr: 2, color: "white"}}
                                                    />
                                                }
                                                type="text"
                                                required={true}
                                                size="medium"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                error={Boolean(formik.touched.name && formik.errors.name)}
                                                fullWidth={true}
                                            />
                                            {formik.touched.name && formik.errors.name && (
                                                <FormHelperText>
                                                    {formik.touched.name && formik.errors.name}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item={true} xs={12} md={6}>
                                        <Stack direction="row" alignItems="center">
                                            <FormControl fullWidth={true} variant="outlined">
                                                <OutlinedInput
                                                    value={formik.values.email}
                                                    placeholder="Your Email"
                                                    name="name"
                                                    color="primary"
                                                    sx={{
                                                        borderRadius: 3,
                                                        borderTopRightRadius: 0,
                                                        borderBottomRightRadius: 0,
                                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                                    }}
                                                    inputProps={{
                                                        style: {color: "white"}
                                                    }}
                                                    startAdornment={
                                                        <MailOutlined
                                                            sx={{fontSize: 20, mr: 2, color: "white"}}
                                                        />
                                                    }
                                                    type="text"
                                                    required={true}
                                                    size="medium"
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                                    fullWidth={true}
                                                />
                                                {formik.touched.email && formik.errors.email && (
                                                    <FormHelperText>
                                                        {formik.touched.email && formik.errors.email}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                            <SendOutlined
                                                sx={{
                                                    padding: 1.8,
                                                    fontSize: 32,
                                                    color: "white",
                                                    backgroundColor: "secondary.main",
                                                    borderTopRightRadius: 12,
                                                    borderBottomRightRadius: 12,
                                                    height: 56,
                                                    width: 56
                                                }}
                                            />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NewsletterForm;