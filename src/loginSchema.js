import * as yup from 'yup'

export default yup.object().shape({
    user: yup.string()
        .required('Please enter your username'),
    pass: yup.string()
        .required('Please enter your password')
})