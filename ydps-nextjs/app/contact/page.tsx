export default function ContactPage() {
  return (
    <main id="contact-body">
      <div id="contact-content">
        <img
          id="contact-img"
          src="/images/YDPS_images/2.png"
          alt="Plumber Checking Pipes"
        />
        <div id="contact-right">
          <h1>Let's Talk</h1>
          <p id="subline">
            Let's connect—reach out today and turn possibilities into
            opportunities
          </p>
          <form action="/my-handling-form-page" method="post">
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name" />
            </p>
            <p>
              <label htmlFor="mail">Email</label>
              <input type="email" id="mail" name="user_email" />
            </p>
            <p>
              <label htmlFor="msg">Message</label>
              <textarea id="msg" name="user_message"></textarea>
              <div className="button-container">
                <button type="submit" className="button">
                  Send
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}