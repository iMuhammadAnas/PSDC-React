import './Newsletter/newsletter.css'
import { useState, type ChangeEvent, type FormEvent } from 'react'

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const changeUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    console.log('user', user)
  }

  return (
    <section className="newsletter-section">
      <h2 className="newsletter-heading">Sign up</h2>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          onChange={changeUserInput}
          name="name"
          type="text"
          placeholder="Type your name"
        />
        <input
          onChange={changeUserInput}
          name="email"
          type="email"
          placeholder="Type your email"
        />
        <input
          onChange={changeUserInput}
          name="password"
          type="password"
          placeholder="Type your password"
        />
        <input
          onChange={changeUserInput}
          name='confirmPassword'
          type="password"
          placeholder="Confirm Passowrd"
        />
        <button type="submit">Sign up</button>
      </form>
    </section>
  )
}

export default Signup
