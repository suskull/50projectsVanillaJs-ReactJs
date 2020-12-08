import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [listImage, setListImage] = useState([])

  const sampleData = [
    {
      id: "1",
      src: "/images/japan-best-cities-kanazawa.jpg",
      label: "Kanazawa",
      isActive: true
    },
    {
      id: "2",
      src: "/images/japan-best-cities-nagasaki.jpg",
      label: "Nagasaki",
      isActive: false
    },
    {
      id: "3",
      src: "/images/japan-in-pictures-most-beautiful-places-miyako-jima-okinawa.jpg",
      label: "Okinawa",
      isActive: false
    },
    {
      id: "4",
      src: "/images/japan-in-pictures-most-beautiful-places-takachiho-gorge.jpg",
      label: "Takachiho",
      isActive: false
    },
    {
      id: "5",
      src: "images/japan-top-attractions-osaka-castle.jpg",
      label: "Osaca castle",
      isActive: false
    },
  ]
  useEffect(() => {
    setListImage(sampleData)
  },[])

  const handleOnclick = (id) => {
    setListImage(listImage.map((item) => item.id === id ? {...item, isActive: true} : {...item, isActive: false}))
  }
  return (
    <div className="container">
      {listImage.map(image => {
        const {id, isActive, src, label} = image
        return (
          <div key={id} className={`panel ${isActive && "active"}`} style={{backgroundImage: `url(${src})`}} onClick={() =>(handleOnclick(id))}><h3>{label}</h3></div>
        )
      })}
    </div>
  );
}

export default App;