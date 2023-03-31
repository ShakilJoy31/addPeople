import '../styles/globals.css'
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  )
}