import * as yup from "yup";
export const formSchema = yup.object().shape({
    keywords: yup
      .string()
      .max(50, "Keywords must be between 2 and 50 characters.")
      .min(2, "Keywords must be between 2 and 50 characters.")
      .required("Please enter keywords to search."),
    mediaType: yup.string().required("Please select a media type."),
    yearStart: yup
      .number()
      .max(new Date().getFullYear(), "Year must not be in the future.")
      .test(
        "len",
        "Please enter a valid year.",
        (val) => !val || (val && val.toString().length === 4)
      ),
  });