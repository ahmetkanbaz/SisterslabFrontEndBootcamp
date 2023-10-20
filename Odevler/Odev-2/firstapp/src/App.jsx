import './App.css'
import PropsComponent from './components/PropsComponent';

function App() {

  const title = 'Veri Listesi';
  const datas = [
    {name: 'Ahmet', surName: 'KANBAZ'},
    {name: 'Feyza', surName: 'SEYFİ'},
    {name: 'Ahmet', surName: 'Deneme'},
  ]

  const selamlamaMesaji = 'Merhaba İlk React Projem';
  const myAge = 24;


  return (
    <>
      <h1>Odev - 2</h1>
      <PropsComponent title={title} datas = {datas} selamlamaMesaji = {selamlamaMesaji} myAge = {myAge}/>
    </>
  )
}

export default App
