import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HomeComponent from './components/home/HomeComponent'

// import Search from './assets/components/search/Search'

import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeComponent />
    {/* <Search /> */}

  </StrictMode>,
)
