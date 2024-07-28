// import './App.css';
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from "./action/Oneaction"
import {setUser,logOut} from "./action/Twoaction"


function App() {
  const transferdata = useSelector(state => state.transferdata)
  const currentUser = useSelector(state => state.currentUser)

  const dispatch = useDispatch()
  const user = {name: "Rei1"}

  useEffect(() => {
    dispatch(setUser(user))
  }, [])

console.log(setUser(user),"setUser(user) ")
  return (
    <div className="App">
        <h1>one action</h1>
      <button onClick={()=>{dispatch(increment(10))}}>+</button> {transferdata}&nbsp;
      <button onClick={()=>{dispatch(decrement())}}>-</button>

      <div>
        <h1>two action</h1>
        {
        currentUser.loggedIn ? 
     
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(logOut())}>Logout</button>
        </> 
        : 
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(setUser(user))}>Login as Rei</button>
        </>
        }
      </div>
    </div>
  );
}

export default App;
