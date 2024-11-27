import CountryDetailsPage from '../components/CountryDetailsPage/CountryDetailsPage.tsx'
import MainPage from '../scenes/MainPage/MainPage'
import NoPage from '../scenes/Nopage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'country/:countryCode',
        element: <CountryDetailsPage />,
      },
      { path: '*', element: <NoPage /> },
    ],
  },
])
export default router
