import{ BrowserRouter } from 'react-router-dom'
;
import { About,Hero, Experience, Navbar  } from './components';

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
  <Navbar />
  <Hero />
  
</div>
<About />
<Experience />
<div className='relative z-0'>
  
 
</div>

    </div>
    </BrowserRouter>
  
  )
  }


export default App
