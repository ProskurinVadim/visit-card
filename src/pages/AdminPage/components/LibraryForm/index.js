import React from "react";
import { Form, Field } from "react-final-form";

const LibraryForm = ({onSubmit,libraryName}) => {
    return (
        <Form
            onSubmit={onSubmit}
            initalValues={{libraryName:libraryName}}
            validate={value => {
                const error = {};
                if(!value.libraryName) error.libraryName = "Required"
                return error
            }}
            render={({handleSubmit,form}) => (
                <form onSubmit={()=>{
                    handleSubmit();
                    form.reset()
                }}>
                    <Field name="libraryName">
                        { ({input,meta}) => (
                            <div>
                                <label>Library Name</label>
                                <input {...input} type="text" placeholder="Library name" />
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

export default LibraryForm;