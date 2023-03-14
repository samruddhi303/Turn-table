import React, {useEffect} from 'react'


function home() {
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log(currentUser)
  }, [])
  return (
       <div>Home component</div>
  )
}
export default home
