import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import Aos from "aos";
import "aos/dist/aos.css";

function BenefitCol() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="benefit-root">
      <Grid className="first-div" container>
        <Grid className="img-part" item sm={6} xs={12}>
          <div data-aos="fade-right">
            <img src="/images/nft-sky.png" alt="artifact-sky" />
          </div>
        </Grid>
        <Grid className="text-part" item sm={6} xs={12}>
          We know that NFTs are the future for art project marketing, business
          branding, and the intersection between art and finance. <br /> <br />
          We truly believe that the Artifact Marketplace will enable contact
          with other members in the NFT space not only within the virtual space,
          but also out in the community and even bring more people in. <br />{" "}
          <br />
          Both the 2.4in and 3.2in NFT would available for you to mint by 5th
          November, 2021.
        </Grid>
      </Grid>
      <Grid className="second-div" container>
        <Grid className="text-part" item sm={6} xs={12}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <OfflineBoltIcon
              style={{
                fontSize: "1.5rem",
                color: "#2081E2",
                marginRight: "0.5rem",
              }}
            />
            Redeemable NFT casting (JPEG, GIF, MP4);
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <OfflineBoltIcon
              style={{
                fontSize: "1.5rem",
                color: "#2081E2",
                marginRight: "0.5rem",
              }}
            />
            batery life WIFI and Bluetooth enabled secured wallet verification;
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <OfflineBoltIcon
              style={{
                fontSize: "1.5rem",
                color: "#2081E2",
                marginRight: "0.5rem",
              }}
            />
            Keychain password protected;
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <OfflineBoltIcon
              style={{
                fontSize: "1.5rem",
                color: "#2081E2",
                marginRight: "0.5rem",
              }}
            />
            Secured link{" "}
          </div>
          <br />
          Safely upload personal health or emergency documents that can be shown
          when your QR code on the back of your device is scanned.
        </Grid>
        <Grid className="img-part" item sm={6} xs={12}>
          <div data-aos="fade-left">
            <img src="/images/nft-clean.png" alt="artifact-sky" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default BenefitCol;
