import React from "react";
import { Form, Field } from "react-final-form";

const SkillsForm = (props) => {
    const {onSubmit, skillName, skillLevel} = props;
    return (
        <Form onSubmit={onSubmit}
            initialValues={{skillName : skillName, skillLevel : skillLevel}}
             validate={values => {
                    const errors = {};
                    if (!values.skillName) errors.skillName = "Required";
                    if (!values.skillLevel) errors.skillLevel = "Required";
                    if (values.skillLevel > 10 ) errors.skillLevel = "Can be more than ten";
                    return errors
                }
             }
            render={({handleSubmit,form}) => (
                <form onSubmit={()=> {
                    handleSubmit();
                    form.reset()
                }}>
                    <Field name="skillName">
                        {({input,meta}) => (
                            <div>
                                <label>Skill Name</label>
                                <input {...input} type="text" placeholder="Skill name" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="skillLevel">
                        {({input,meta}) => (
                            <div>
                                <label>Skill Level</label>
                                <input {...input} type="number" placeholder="Skill level" />
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
export default SkillsForm;