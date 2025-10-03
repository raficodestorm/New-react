import { useState } from "react"
const Use = () => {
  const [search, setSearch] = useState('');

  const changeHandle = (event) => {
    setSearch(event.target.value)
  }

  return(
    <>
      <input type="text" onChange={changeHandle} />
      <p>Searching for: <strong>{search}</strong></p>
    </>
  )
}
export default Use;