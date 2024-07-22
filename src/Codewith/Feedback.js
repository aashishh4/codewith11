import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function Feedback() {
    const initialValues = {
        Firstname: "",
        Lastname: "",
        Address: "",
        Country: "",
        Email: "",
        Number: "",
    };

    const validationSchema = Yup.object({
        Firstname: Yup.string().required("First name is required"),
        Lastname: Yup.string().required("Last name is required"),
        Address: Yup.string().required("Address is required"),
        Country: Yup.string().required("Country is required"),
        Email: Yup.string().email("Invalid email address").required("Email is required"),
        Number: Yup.string().required("Number is required"),
    });

    const handleSubmit = (values, actions) => {
        console.log("values", values);
        actions.resetForm();
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Feedback Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form style={styles.form}>
                    <label style={styles.label}>First Name</label>
                    <Field type="text" name="Firstname" placeholder="Enter your first name" style={styles.input} />
                    <ErrorMessage component="div" name="Firstname" style={styles.error} />
                    
                    <label style={styles.label}>Last Name</label>
                    <Field type="text" name="Lastname" placeholder="Enter your last name" style={styles.input} />
                    <ErrorMessage component="div" name="Lastname" style={styles.error} />
                    
                    <label style={styles.label}>Address</label>
                    <Field type="text" name="Address" placeholder="Enter your address" style={styles.input} />
                    <ErrorMessage component="div" name="Address" style={styles.error} />
                    
                    <label style={styles.label}>Country</label>
                    <Field type="text" name="Country" placeholder="Enter your country" style={styles.input} />
                    <ErrorMessage component="div" name="Country" style={styles.error} />
                    
                    <label style={styles.label}>Email</label>
                    <Field type="email" name="Email" placeholder="Enter your email" style={styles.input} />
                    <ErrorMessage component="div" name="Email" style={styles.error} />
                    
                    <label style={styles.label}>Number</label>
                    <Field type="text" name="Number" placeholder="Enter your number" style={styles.input} />
                    <ErrorMessage component="div" name="Number" style={styles.error} />

                    <button type="submit" style={styles.button}>Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
    },
    header: {
        textAlign: "center",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "5px",
    },
    input: {
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    error: {
        color: "red",
        marginBottom: "10px",
    },
    button: {
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
    }
};

export default Feedback;
