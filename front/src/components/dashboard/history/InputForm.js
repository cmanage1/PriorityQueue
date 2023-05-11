import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Stack, Box, Button, TextField } from "@mui/material";
import { AppContext } from "../../../context/AppContextProvider";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

export function InputForm() {
  const { triggerEffect, onChange } = useContext(AppContext);
  const [submitting, setSubmitting] = useState(false);
  const [t] = useTranslation();

  const handleSubmit = (values, { resetForm }) => {
    setSubmitting(true);
    const data = {
      numbers: values.field1.split(",").map(Number), //Get from input
      time: Date.now(), // In Epoch
      rateLimit: parseInt(values.field2),
    };

    onChange({ action: "enqueue", payload: data });
    setSubmitting(false);
    triggerEffect();
    resetForm();
  };

  const validationSchema = yup.object().shape({
    field1: yup
      .string()
      .matches(
        /^[\d,]+$/,
        "Value must be a sequence of numbers separated by commas"
      )
      .required("Field is required"),
    field2: yup
      .number()
      .integer("Value must be an integer")
      .min(2, "Value must be at least 2")
      .max(10, "Value cannot be greater than 10")
      .required("Field is required"),
  });

  return (
    <Formik
      initialValues={{ field1: "", field2: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ touched, errors, isValid, isSubmitting }) => (
        <Form>
          <Stack spacing={4}>
            <Box>
              <Field name="field1">
                {({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    autoComplete="off"
                    label={t("new-inputs")}
                    variant="outlined"
                    placeholder="Ex: 1,3,4,4"
                    error={touched.fieldName1 && Boolean(errors.fieldName1)}
                    helperText={touched.fieldName1 && errors.fieldName1}
                  />
                )}
              </Field>
              <ErrorMessage name="field1">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Box>
            <Box>
              <Field name="field2">
                {({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label={t("rate-limit")}
                    variant="outlined"
                    placeholder="Ex: 3"
                    autoComplete="off"
                    error={touched.fieldName2 && Boolean(errors.fieldName2)}
                    helperText={touched.fieldName2 && errors.fieldName2}
                    inputProps={{ inputMode: "numeric" }}
                  />
                )}
              </Field>
              <ErrorMessage name="field2">
                {(msg) =>
                  msg ? (
                    <Box typography="body1" style={{ color: "red" }}>
                      {msg}
                    </Box>
                  ) : (
                    <Box height={16} />
                  )
                }
              </ErrorMessage>
            </Box>
            <Button
              disabled={!isValid || isSubmitting || submitting}
              type="submit"
              variant="contained"
              color="primary"
            >
              Enqueue
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
