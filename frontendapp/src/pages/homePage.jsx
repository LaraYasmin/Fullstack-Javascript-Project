import React from 'react';

const Home = () => {
  const [form, setFormValue] = React.useState({
    company_name: '',
    description: '',
    cellphone: '',
    responsible: '',
    email: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await postForms(form);
    // console.log(response)
  }

  return (
    <></>
  )
}

export default Home;