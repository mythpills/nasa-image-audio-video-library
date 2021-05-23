# CRUK technical exercise (React)

- The below technical guidance has been provided for the task
- You should use the CRUK component library when building your form https://www.npmjs.com/package/@cruk/cruk-react-components 
![image](https://user-images.githubusercontent.com/11517358/119277907-27553800-bc1a-11eb-91b1-605b3b291310.png)
![image](https://user-images.githubusercontent.com/11517358/119277913-30dea000-bc1a-11eb-8b11-96701c8b9fc7.png)
![image](https://user-images.githubusercontent.com/11517358/119277927-3cca6200-bc1a-11eb-8d9b-54a38c3c0614.png)


## Documentation for tools used
- Formik: https://formik.org/docs/overview 
- Yup https://github.com/jquense/yup 
- Styled components https://styled-components.com/docs 
- NASA Images and Video Library API https://api.nasa.gov/ 
- start - npm start
- unit test - npm run test
- e2e test - npm run e2e-test



## Task details
You will be building a form which will fetch assets from the NASA Images and Video Library API. The fields will provide filters for the query. The media returned should be displayed below the form for the user. The user should only see the first 10 items.

## Fields
### Keywords field
Required  
Initial value: “”  
Type: Text  
Label: Keywords  
Name: keywords  

An error message below the field should read “Please enter keywords to search.” if the user does not fill in the field.

An error message below the field should read “Keywords must be between 2 and 50 characters.” if the field value is less than 2 or more than 50 characters long.

### Media type field
Required  
Default: none  
Type: Select  
Label: Media type  
Name: mediaType  
Values: [“audio”, “video”, “image”]

An error message below the field should read “Please select a media type.” if the user does not select an option.

### Year start field
Optional  
Initial value: “”  
Type: Text  
Label: Year start  
Name: yearStart

An error message below the field should read “Please enter a valid year.” if the user enters an invalid year.

An error message below the field should read “Year must not be in the future.” if the user enters a year after the current year.

### Submit button
Submit button should change to a disabled state and label should read “Submitting…” when user clicks the submit button to submit the form. The button should return to and enabled state with label “Submit” when the API responds.

## Tests
Ensure your application has adequate test coverage.
