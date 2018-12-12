## Menu

- [Introduction](#Introduction)
- [Usage](#usage)
- [Components](#components)
    - [Input](#input)
    - [Select](#select)
    - [Textarea](#textarea)
    - [Checkbox](#checkbox)
    - [Radio](#radio)

## Introduction

Vue Inputs is a package that bundles common form inputs using Bootstrap 4 framework. Each component acts as a wrapper, making it much easier to use form elements without the need to repeat labels, validation and other classes, help blocks.

## Installation

```bash
npm install vue-inputs --save
```

## Usage

Including this plugin in your VueJS application is very simple. This will register all available components globally, so you can use them anywhere in your application.

```javascript
import FormInputs from 'vue-inputs'

Vue.use(FormInputs)
```

## Components

All components have validator injected into them from parent component, so you don't need to worry about checking for errors. If error with same name as `name` property is found, validation error will be show on component.

###### Available props

**Prop**|**Types**|**Default**|**Description**
-----|-----|-----|-----|
label | String, Boolean| - | Label to show on the input. If `false`, label is not shown.
name | String | - | Input's name
value | any | - | Automatically injected when using `v-model`
inline | Boolean | `false` | Show label and input inline
input-group | Boolean | `false` | Show input group addon. Makes slot `input-group-append` available. (`form-input` only)
options | Array | - | Options for select (`form-select` only)
id | String | auto generated | ID (`form-checkbox` and `form-radio` only)

#### Input

```javascript
<form-input
    label="First Name"
    name="first_name"
    v-model="user.firstName"
></form-input>
```

#### Select

```javascript
<form-select
    label="Role"
    name="role_id"
    v-model="user.roleId"
    :options="roles"
></form-select>
```
Select component accepts array of objects as options:

```javascript
roles: [
  { text: 'Select Role', value: null },
  { text: 'Administrator', value: 1 },
  { text: 'Subscriber', value: 2 }
]
```

#### Textarea

```javascript
<form-textarea
    label="Content"
    name="content"
    v-model="post.content"
></form-textarea>
```

#### Checkbox

```javascript
<form-checkbox
    label="I agree to terms and conditions"
    name="terms_and_conditions"
    v-model="user.terms_and_conditions"
></form-checkbox>
```

#### Radio

```javascript
<form-radio
    label="Blue"
    name="color"
    value="blue"
    v-model="product.color"
></form-radio>
```
