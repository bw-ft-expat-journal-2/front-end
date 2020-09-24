import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
    .required('User name is required')
    .min(5, 'username must be at least 5 letters'),
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required'),

})