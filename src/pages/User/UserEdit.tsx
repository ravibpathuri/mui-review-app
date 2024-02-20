import {
  Button,
  Container,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import { FieldArray, Form, useFormik } from "formik";
import * as Yup from "yup";

interface UserEditProps {}

const yupSchema = Yup.object().shape({
  zipCode: Yup.string(),
  pan: Yup.string().min(6).max(6),
  hasVehicle: Yup.boolean(),
  vechicleNumber: Yup.string().when("hasVehicle", {
    is: true,
    then: (schema) => schema.required("Vehicle Number Reuired"),
    otherwise: (schema) => schema,
  }),
  intrests: Yup.array()
    .required()
    .min(3, "Minium 3 intrests")
    .max(5, "Max 5 intrests"),
});

const UserEdit: React.FC<UserEditProps> = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      fullName: "",
      email: "",
      mobile: "",
      pan: "",
      address: "",
      city: "",
      zipCode: "",
      hasVehicle: false,
      vechicleNumber: "",
      intrests: ["", "", ""],
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      console.log("values", values);
      // axiosWebClient.post("/user", values);
    },
  });
  console.log("eror", formik.values);
  return (
    <Container maxWidth="md">
      <form onSubmit={formik.handleSubmit}>
        <Stack sx={{ mt: 2 }} gap={2}>
          <TextField
            variant="outlined"
            label="Name"
            required
            name="fullName"
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            required
            name="email"
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            label="Mobile"
            required
            name="mobile"
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            label="PAN"
            name="pan"
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            label="Address"
            name="address"
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            label="City"
            name="city"
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            label="Zip Code"
            name="zipCode"
            onChange={formik.handleChange}
            helperText={formik.errors.zipCode}
            error={formik.errors.zipCode ? true : false}
          />
          <FormControlLabel
            control={
              <Switch
                name="hasVehicle"
                value={formik.values.hasVehicle}
                onClick={formik.handleChange}
              />
            }
            label="Do you have Vehicle"
          />
          <TextField
            variant="outlined"
            label="Vechicle Number"
            name="vechicleNumber"
            onChange={formik.handleChange}
            helperText={formik.errors.vechicleNumber}
            error={formik.errors.vechicleNumber ? true : false}
          />

          <FieldArray
            name="intrests"
            render={(arrayHelpers) => (
              <Stack>
                {formik.values.intrests.map((intreset, index) => (
                  <Stack key={index} direction="row" sx={{ pb: 5 }} spacing={2}>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="Intrest"
                      name={`intrests.${index}`}
                      onChange={formik.handleChange}
                      helperText={
                        formik.errors.intrests && formik.errors.intrests[index]
                      }
                      error={
                        formik.errors.intrests && formik.errors.intrests[index]
                          ? true
                          : false
                      }
                    />

                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      Remove
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => arrayHelpers.insert(index, "")}
                    >
                      Add
                    </Button>
                  </Stack>
                ))}
                <Button
                  variant="outlined"
                  onClick={() => arrayHelpers.push("")}
                >
                  Add New
                </Button>
              </Stack>
            )}
          />
          <Button type="submit" variant="contained">
            Save
          </Button>
          <Button
            type="button"
            variant="contained"
            onClick={() => formik.validateForm()}
          >
            Validate
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default UserEdit;
