import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Tasks from './Components/Tasks';
import Documentation from './Components/Documentation';


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/document" element={<Documentation />} />
      {/* <Route path="/faqs" element={<Faqs />} /> */}
      
    </Routes>
  );
}

export default AppRouter