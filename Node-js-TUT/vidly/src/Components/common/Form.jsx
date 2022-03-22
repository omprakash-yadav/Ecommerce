import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';
import Select from './Select';
class Form extends Component {

    state = {
        data: {},
        errors: {}

    }
    validate = () => {
        const option = { abortEarly: false }
        const result = Joi.validate(this.state.data, this.schema, option);

        if (!result.error) return null;
        const errors = {};
        for (let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors

    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;

    };
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();

    };
    handleChanged = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorsMassage = this.validateProperty(input);
        if (errorsMassage) errors[input.name] = errorsMassage;
        else delete errors[input.name];
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors })

    }
    renderButton = (lable) => {
        return (
            <button
                disabled={this.validate()}
                className="btn btn-primary"> {lable}
            </button>

        );
    };
    renderSelect(name, label, options) {
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChanged}
                error={errors[name]}
            ></Select>
        )
    }
    renderInput = (name, label, type = "text") => {
        const { data, errors } = this.state;
        return (
            <Input
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChanged}
                error={errors[name]}
            ></Input>
        );
    }


}

export default Form;