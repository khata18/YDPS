export default function AboutPage(){
   return (
    <main id="about-us">
      <div id = "about-content">
        <section id="about-us-hero">
            <h2>About Us</h2>
            <p>YDPS started in Mohon, Talisay, Cebu, with a mission to provide clean and reliable water services to the local community. Through innovation and efficiency, we have expanded to other areas of Cebu and Mindanao, bringing seamless water management to more households and businesses. </p>
            <div className="container">
              <img src="images/YDPS_images/4.png" alt="Avatar" className="water-img" style={{width:'100%'}}/>
              <div className="middle">
                <a href="contact.html" className="text">Talk to Us</a>
              </div>
            </div>

        </section>
        <section id = "mission">
            <h2>Mission</h2>
        
            <p>
                Our mission at YDPS is to provide clean, reliable, and efficiently managed water services to communities, including those with limited access to safe water. Through innovation and technology, we ensure transparent billing, accurate consumption tracking, and seamless account management for our customers. As we expand across Cebu and Mindanao, we remain committed to making affordable and sustainable water solutions accessible to everyone, improving lives one drop at a time.</p>
        </section>
        <section id = "vision">
            <h2>Vision</h2>
            <p>
                Our vision at YDPS is to become a leading water service provider in Cebu, Mindanao, and beyond, ensuring that every household and business has access to clean, safe, and reliable water. We strive to bridge the gap for communities with limited water access by leveraging innovative technology and efficient management systems. Through transparency, sustainability, and continuous expansion, we aim to create a future where affordable and high-quality water services are accessible to all.</p>
        </section>
      </div>
    </main>
   ) 
}