import Header from './Header'
import HomeMain from '../components/HomeMain'
export default function HomePage() {
  //devo cambaire il fetch, dato che non carico davvero i dati sul server

  return (
    <>
      <div className='mx-auto max-w-6xl'>
        <Header></Header>
        <HomeMain></HomeMain>
      </div>
    </>
  )
}
