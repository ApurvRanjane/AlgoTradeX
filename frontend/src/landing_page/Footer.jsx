import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#FAFBFB" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p className="fw-semibold text-dark mb-2">Company</p>
            <div
              className="d-flex flex-column"
              style={{ rowGap: "0.6rem" }} // balanced spacing
            >
              <a href="#" className="text-muted text-decoration-none">
                About
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Products
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Pricing
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Referral programme
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Careers
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Zerodha.tech
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Press & media
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Zerodha cares (CSR)
              </a>
            </div>
          </div>
          <div className="col">
            <p className="fw-semibold text-dark mb-2">Support</p>

            <div
              className="d-flex flex-column"
              style={{ rowGap: "0.6rem" }} // balanced spacing
            >
              <a href="#" className="text-muted text-decoration-none">
                Contact
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Support portal
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Z-Connect blog
              </a>
              <a href="#" className="text-muted text-decoration-none">
                List of charges
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Downloads & resources
              </a>
            </div>
          </div>
          <div className="col">
            <p className="fw-semibold text-dark mb-2">Account</p>

            <div
              className="d-flex flex-column"
              style={{ rowGap: "0.6rem" }} // between gap-1 (~0.25rem) and gap-2 (~0.5rem)
            >
              <a href="#" className="text-muted text-decoration-none">
                Open an account
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Fund transfer
              </a>
              <a href="#" className="text-muted text-decoration-none">
                60 day challenge
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5  text-muted" style={{ fontSize: "14pxs" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com , for DP rela ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, Communication, Speedy redressal of the
            grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            “Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions direct the end of the day. Issued
            in the interest of investors. KYC is one time exercise while dealing
            in securities markets - once KYC is done through a SEBI registered
            inter you need not undergo the same process again when you approach
            another intermediary.” Dear Investor, if you are subscribing to an
            IPO, there is no need to issue a ch number and sign the IPO
            application form to authorize your bank to make payment in case of
            allotment. In case of non allotment the funds will remain in your
            bank accou tips, and have not authorized anyone to trade on behalf
            of others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
