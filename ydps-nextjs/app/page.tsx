export default function HomePage() {
  return (
    <div id="content">
      <header>
        <a id="logo_link" href="/">
          <img className="logo" src="/images/ydps-logo-removedbg.png" alt="YDPS logo" />
        </a>
        <nav>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>
          <a id="login" href="/login">Login</a>
        </nav>
      </header>
      <main>
        <section id="body1">
          <div id="leftbody1">
            <h2>Welcome to YDPS</h2>
            <p>YDPS provides clean, safe, and reliable water to communities across Cebu and Mindanao, including areas with limited access. Starting in Mohon, Talisay, Cebu, we have expanded to ensure households and businesses receive a consistent, high-quality water supply for daily use and operations.</p>
            <div id="quick-link">
              <a id="our-offers" href="/services">Our Offers</a>
            </div>
          </div>
            <video id="water" autoPlay loop muted aria-label="video of water supply">
              <source src="/videos/YDPS-herovid.mp4" type="video/mp4"/>
            </video>
        </section>
        <p id="line">To embody our excellent service, we introduce...</p>
        <section id="body2">
          <div id="leftbody2">
            <h2>YDPS Dashboard</h2>
            <p>The customer dashboard allows users to track water consumption, view current and past bills, and receive real-time notifications for due dates and payments. Customers can also download invoices, check payment statuses, and monitor usage trends through interactive graphs, ensuring a clear and hassle-free billing experience.</p>
            <a href="/login">Sign Up</a>
          </div>
          <video id="dashboard" autoPlay loop muted aria-label="video of dashboard">
            <source src="/videos/Dashboard 3.mp4" type="video/mp4"/>
          </video>
        </section>
      </main>
      <footer>
        <div id="footer-left">
          <div id="footer-left1">
            <a id="logo_link" href="/">
              <img className="logo" src="/imgages/ydps-logo-removedbg.png" alt="YDPS logo"/>
            </a>
            <p id="copyright">&copy; 2025 YDPS All rights reserved.</p>
          </div>
          <p id="created">Website created by Kosei Hatakenaka</p>
        </div>
        <p id="footer-line"></p>
        <div id="footer-right">
        <p>Phone Number: +639660866698</p>
        <p>Email: ydps@gmail.com</p>
        <p>Location: Mohon, Talisay, Cebu Ph, 6045</p>
      </div>
      </footer>
    </div>
  )
}
