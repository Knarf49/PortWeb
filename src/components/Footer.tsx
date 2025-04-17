const Footer = () => {
  return (
    <div>
      <footer className="bg-white shadow-sm dark:bg-gray-800 w-screen">
          <div className="p-6">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">DevWithoutBrain™</a>. All Rights Reserved.</span>
            <ul className="footer-content">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Licensing</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
          </div>
      </footer>

    </div>
  )
}

export default Footer