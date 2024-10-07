import logo from '../assets/MUAL.png'

import "../constants/style.css"
function Navbar() {
  return (
   <nav className=" px-4 sm:px-8 lg:px-16 mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="glow absolute top-10  w-20 h-16 " src={logo} alt="logo" />
    </div>
   </nav>
  )
}

export default Navbar
