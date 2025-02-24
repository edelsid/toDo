import Header from "./Header"
import Tasks from "./Tasks"
import Footer from "./Footer"

export default function Widget() {
  return (
    <div className='widget'>
      <Header />
      <Tasks />
      <Footer />
    </div>
  )
}
