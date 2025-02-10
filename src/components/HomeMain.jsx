import Card from './Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function HomeMain() {
  const [cardList, setCardList] = useState([])
  function fetchCards() {
    axios.get('http://localhost:3000/cards').then(res => {
      setCardList(res.data)
    })
    console.log('fetch card')
  }
  useEffect(fetchCards, [])

  return (
    <>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {cardList.map(card => {
          return <Card card={card}></Card>
        })}
      </div>
    </>
  )
}
