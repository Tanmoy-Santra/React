
import './App.css'
import Card from './components/Card'
import PropsComponent from './components/PropsComponent'

function App() {
 
const user={name :'vai', id:'student' , phone :'989898989'}
  return (
    <>
     <Card title='hello' desc='hi i am card'></Card>
     <PropsComponent {...user}></PropsComponent>
    </>
  )
}

export default App
