import type { FC } from "react"

interface Greeting {
  location: string
  time: string
}

// const Greeting = ({location, time}: Greeting) => {
const Greeting: FC<Greeting> = ({location, time}) => {
  return (
    <>
      <h2>Welcome to {location} </h2>
      <p>the time is {time}</p>
    </>
  )
}

export default Greeting
