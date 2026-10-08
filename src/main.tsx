// v1
// // import { StrictMode } from 'react' // commented
// // import App from './App.tsx' // commented
// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import router from "./router.tsx"
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <>
//     <RouterProvider router={router} />
//   </>
//   // commented strict mode
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
// )

// v2
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthProvider } from "./auth/AuthContext";
import { StudentProvider } from "./context/studentContext";
import './index.css'

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <StudentProvider>
        <Suspense fallback={<div>Loading page...</div>} >
          <RouterProvider router={router} />
        </Suspense>
      </StudentProvider>
    </AuthProvider>
  </Provider>
);
