import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        try {
          if (window.google) {
            const googleMap = new window.google.maps.Map(document.getElementById('googleMap'), {
              center: { lat: 40.7128, lng: -74.0060 },
              zoom: 15,
            });
          } else {
            console.error('Google Maps API is not loaded.');
          }
        } 
        catch (error) {
          console.error('Error initializing Google Map:', error);
        }
      }, []);
      

  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div>
            <div className="d-flex ">
              <button>
                SEND
              </button>
            </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                <div id="googleMap" style={{ width: '100%', height: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
