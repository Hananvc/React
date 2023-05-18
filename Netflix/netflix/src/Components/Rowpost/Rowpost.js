import React ,{useEffect,useState} from 'react'
import './Rowpost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const[movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')   
  useEffect(()=> {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network error")
    })

  },[])
    const handleMovie=(id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language-en-US`).then(response=>{
        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
        }else{
          console.log("Array empty")
        }
      })
      
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>{
            return(
              <div>
              {obj.backdrop_path && (
              <div>
                <img
                onClick={() => handleMovie(obj.id)}
                className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                <li className='test'>{obj.original_title}</li>
              </div>
              
            )}
              
              </div>
            )
          }
          )}
          </div>
     { urlId && <Youtube opts={opts} videoId={urlId.key} />} 
    </div>
  )
}

export default Rowpost
