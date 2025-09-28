import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import './index.css'
import App from './App.jsx'
import { ContextApi } from './components/ContextApi.jsx';
// import { store } from './app/store'
import { store } from './store.js';
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>,
   </Provider>
 

)
