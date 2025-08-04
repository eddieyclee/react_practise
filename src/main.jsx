import { createRoot } from 'react-dom/client'
import App from './UseMemoPractise.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import routes from './routes/index.jsx'

// 加入路由表routes
// const router = createHashRouter(routes);

// 自行管理伺服器使用 createBrowserRouter
// 會使用Github Pages使用 createHashRouter
createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router}>
    <App />
  // </RouterProvider>
)
