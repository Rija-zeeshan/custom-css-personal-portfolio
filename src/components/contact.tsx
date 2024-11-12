import "../style/contact.css";

function contact() {
  return (
    <main className= "contact-main">
        
      <div className="form-container">
      <h1 className="contact-title">Contact Us</h1>
        <form action="" className="form">
          <input type="text" placeholder="Enter your name" />
          <input type="Email" placeholder="Enter your Email" />
          <input className="msg" type="text" placeholder="your message" />
        </form>
        <button className="btn-sub">submit</button>
      </div>
    </main>
  );
}

export default contact;
