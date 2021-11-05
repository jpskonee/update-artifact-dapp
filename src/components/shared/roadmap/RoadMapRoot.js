import React, {useEffect} from "react";
import RoadMapItemLeft from "./RoadMapItemLeft";
import RoadMapItemRight from "./RoadMapItemRight";
import Aos from "aos";
import "aos/dist/aos.css";

function RoadMapRoot() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="roadmap-root">
      <div className="roadmap-left">
        <div data-aos="fade-right"> 
        <RoadMapItemLeft
          date="NOVEMBER 2021"
          header="PRESALE OF THE ARTIFACT NFT ACCESSORY DROPS"
          body="WEBSITE WILL BE OPEN FOR MINTING; DURING THIS TIME USER WILL CONNECT THEIR WALLET AND PAY WITH ETHEREUM;EACH WALLET WILL BE ABLE TO MINT UP TO 50 ARTIFACT NFT'S- ONCE MINTED THE ARTIFACT NFT ACTS AS REDEMPTION TOKEN FOR ONE PHYSICAL ARTIFACT ACCESSORY AS WELL AS VERIFIED MEMBER ACCESS TO ARTIFACT MARKETPLACE."
        />
        </div>
        <div data-aos="fade-right"> 
        
        <RoadMapItemLeft
          date="JANUARY 2022"
          header="REDEEMING KEYCHAIN UPDATES"
          body="MANUFACTURER ACCESSORY UPDATES- DELIVERY DATE - ARTIFACT MARKETPLACE WEB APP AND MOBILE APP UPDATES - SECOND COLLECTION ANNOUNCED"
        />
        </div>
      </div>
      <div className="line-sep">
        <div className="ball-start"></div>
        <div className="line"></div>
        <div className="ball-stop"></div>
      </div>
      <div className="roadmap-right">
        <div data-aos="fade-left"> 
        <RoadMapItemRight
          date="DECEMBER 2021"
          header="COLLABORATIONS ANNOUNCED (POSSIBLE MINT OF SPECIAL EDITION ACCESSORIE"
          body="ARTIFACT NFT HOLDERS GET VERIFIED ON ARTIFACT MARKETPLACE AS NFT COLLECTORS AND/OR NFT PROJECTS (BETA VERSION) (DISPLAY NFT GALLERIES HERE FROM VARIOUS MARKETPLACES- VERIFIED COLLECTORS OR PROJECTS CAN ADVERTISE OR PROMOTE NFT PROJECTS- ABILITY CONNECT TO ARTIFACT ACCESSORY)"
        />
        </div>
      </div>
    </div>
  );
}

export default RoadMapRoot;
