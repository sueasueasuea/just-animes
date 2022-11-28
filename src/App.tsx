import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import Card from './components/AnimeCard/AnimeCard'

function App() {

  return (
    <div className="App">
      <AppHeader/>
      <div className="app-grid">
        <Card img='/images/1.png' title='ดาบพิฆาตอสูร'  />
        <Card img='/images/2.jfif' title='เทพมรณะ'  />
        <Card img='/images/3.jfif' title='นินจาจอมคาถา'  />
        <Card img='/images/4.jfif' title='วันพีช'  />
        

      </div>
    </div>
  )
}

export default App
