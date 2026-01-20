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
    </div>
  )
}
