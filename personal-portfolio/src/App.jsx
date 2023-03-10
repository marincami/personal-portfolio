import AppRouter from './AppRouter'
import './App.css'
import NavigationBar from './NavigationBar'
import data from './assets/data.json'

export default function App() {
  const { routes } = data;

  return (
    <div>
      <NavigationBar />
      <AppRouter routes={routes}/>
    </div>
  )
}
