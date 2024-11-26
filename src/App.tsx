
import Header from './header'
import Greetings from './Greetings'
import Card from './card'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// const containerStyles: CSS.Properties ={
//   width:"75%"
// }
function App() {
  

  return (
    <>
      <Header></Header>
      <div className='container border rounded mt-4 d-flex gap 2' style={{width:"75%", boxShadow:"5px 5px 5px #c7c9d1", backgroundColor:"white"}}>
        <Card></Card>
        <Greetings name='Yudis Aqsha' education='Computer Science'></Greetings>
      </div>
      
    </>
  )
}

export default App
