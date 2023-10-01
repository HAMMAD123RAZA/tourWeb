import React, { useEffect, useState } from 'react'
import Loading from './assets/Loading'
import Tour from './assets/Tour'
import Header from './assets/Header'

const App = () => {
  const url = 'https://course-api.com/react-tours-project'

  const [loading, setLoading] = useState(true)
  const [tour, setTour] = useState([])

  const removeCard = (cardId) => {
    const updatedCards = tour.filter((card) => card.id !== cardId);
    setTour(updatedCards);
};

  const fn = async () => {
    setLoading(true)

    try {
      const api = await fetch(url)
      const res= await api.json()
      setTour(res)
      setLoading(false)
  
    } catch (error) {
      console.log(error)
      setLoading(false)
      
    }
  }
  useEffect(()=>{
    fn()
      },[])

      
  if (loading) {
    return <Loading />
  }

  if(tour.length===0){ 
return (
<>
<div className="text-center my-5">
  <h3 className='text-primary'>No Tours Left</h3>
 <button onClick={fn} className='btn btn-primary my-3'>Refresh</button> 
</div>
</>)
  }
  return (
    <>
    <Header/>
<Tour tour={tour} removeCard={removeCard} />
    </>
  )
}

export default App