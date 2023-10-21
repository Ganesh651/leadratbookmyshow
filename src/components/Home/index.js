import {useState,useEffect} from 'react'
import Header from '../Header'
import Movies from '../Movies'
import './index.css'



const Home = ()=>{
      const [moviesList,setMoviesLsit] = useState([])
      console.log(moviesList)

      useEffect(()=>{
            const getMovies =  async ()=>{
           try{ const response = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            const data = await response.json()
            setMoviesLsit(data)
           }catch(e){
            console.log(e)
           }

      }
      getMovies()
      },[])

      return <>
            <Header />
            <div className='home-container'>
                  <h1>
                        Recommended Movies
                  </h1>
                  <ul className='movies-container'>
                        {moviesList.map((movies,index)=>(
                              <Movies movies={movies} key={index}/>
                        ))}
                  </ul>
            </div>
      </>

}

export default Home