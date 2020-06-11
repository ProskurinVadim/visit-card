import React from "react";
import { Form, Field } from "react-final-form";
const ProjectForm = (props) => {
    const {onSubmit, projectName,projectLink, projectDescription} = props;
    return (
        <Form onSubmit={onSubmit}
              initialValues={{projectName:projectName,projectLink:projectLink,projectDescription:projectDescription}}
              validate={values => {
                      const errors = {};
                      if (!values.projectName) errors.projectName = "Required";
                      if (!values.projectLink) errors.projectLink = "Required";
                      if (!values.projectDescription) errors.projectDescription = "Required";
                      return errors
                }
              }
              render={({form,handleSubmit}) => (
                  <form onSubmit={()=>{
                      handleSubmit();
                      form.reset()
                  }}>
                      <Field name="projectName">
                          {({input,meta}) => (
                              <div>
                                  <label>Project Name</label>
                                  <input {...input} type="text" placeholder="Project name" />
                                  {meta.error && meta.touched && <span>{meta.error}</span>}
                              </div>
                          )}
                      </Field>
                      <Field name="projectLink">
                          { ({input,meta}) => (
                              <div>
                                  <label>Project Link</label>
                                  <input {...input} type="text" placeholder="Project link" />
                                  {meta.error && meta.touched && <span>{meta.error}</span>}
                              </div>
                          )}
                      </Field>
                      <Field name="projectDescription">
                          { ({input,meta}) => (
                          <div>
                              <label>Project Description</label>
                              <input {...input} type="text" placeholder="Project description" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                          </div>
                      )}
                      </Field>
                      <button type="submit" label="submit">Submit</button>
                  </form>
              )}
        />
    )
};
export default ProjectForm