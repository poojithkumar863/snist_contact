import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AddContacts from './components/AddContacts'
import UpdateContact from './components/UpdateContact';
import ViewContact from './components/ViewContact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add-contacts' element={<AddContacts />} />
        <Route path='update-contact/:id' element={<UpdateContact />} />
        <Route path='view-contact/:id' element={<ViewContact />} />
      </Routes>
    </div>
  );
}

export default App;
