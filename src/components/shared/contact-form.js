import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Stack
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {name: "", email: "", phone: "", message: ""},
        validationSchema: yup.object().shape({
            name: yup.string().required("Field required"),
            email: yup.string().email("Enter valid email").required("Field required"),
            phone: yup.string().required("Field required"),
            message: yup.string().required("Field required"),
        })
    });

    return (
        <Card
            variant="outlined"
            sx={{borderRadius: 2, backgroundColor: "background.default"}}
            elevation={0}>
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <Stack direction="column" spacing={2}>
                        <Box>
                            <FormControl fullWidth={true} variant="outlined">
                                <InputLabel>Name</InputLabel>

                                <OutlinedInput
                                    value={formik.values.name}
                                    placeholder="Your Name"
                                    name="name"
                                    color="primary"
                                    sx={{
                                        backgroundColor: "background.gray",
                                        borderRadius: 32
                                    }}
                                    type="text"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.name && formik.errors.name)}
                                    fullWidth={true}
                                    label="Your name"
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <FormHelperText>
                                        {formik.touched.name && formik.errors.name}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth={true} variant="outlined">
                                <InputLabel>Email</InputLabel>
                                <OutlinedInput
                                    value={formik.values.email}
                                    placeholder="Your Email"
                                    name="email"
                                    sx={{
                                        backgroundColor: "background.gray",
                                        borderRadius: 32
                                    }}
                                    type="email"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                    helperText={formik.touched.name && formik.errors.email}
                                    fullWidth={true}
                                    label="Your email"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <FormHelperText>
                                        {formik.touched.email && formik.errors.email}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth={true} variant="outlined">
                                <InputLabel>Phone</InputLabel>

                                <OutlinedInput
                                    value={formik.values.phone}
                                    placeholder="Your Phone"
                                    name="phone"
                                    sx={{
                                        backgroundColor: "background.gray",
                                        borderRadius: 32
                                    }}
                                    type="tel"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.phone && formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                    fullWidth={true}
                                    label="Your phone"
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <FormHelperText>
                                        {formik.touched.phone && formik.errors.phone}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth={true} variant="outlined">
                                <InputLabel>Message</InputLabel>
                                <OutlinedInput
                                    value={formik.values.message}
                                    placeholder="Your Message"
                                    name="message"
                                    sx={{
                                        backgroundColor: "background.gray",
                                        borderRadius: 8
                                    }}
                                    type="text"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.message && formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}
                                    fullWidth={true}
                                    label="Your Message"
                                    multiline={true}
                                    rows={4}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <FormHelperText>
                                        {formik.touched.message && formik.errors.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth={true}
                            size="large"
                            disableElevation={true}
                            sx={{
                                textTransform: "capitalize",
                                color: "white",
                                borderRadius: 2,
                                fontWeight: 700,
                                backgroundColor: "secondary.main",
                                fontFamily: "SatrevaNova"
                            }}>
                            Send Message
                        </Button>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm;