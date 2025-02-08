import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';






import Header from './components/main/Header';
import HeroSection from './components/main/HeroSection';
import FrontPage from './FrontPage';





// Main App Component with authentication state
const App = () => {
  
  

 

  // Protected Route Wrapper


  // Define the Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Login Route */}
        <Route path="/" element={<FrontPage/>} />
        
        <Route path="*" element={<Navigate to="/" />} />
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

// Render the App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
