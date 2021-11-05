import React, { useState } from "react";
import { Container, Grid, IconButton } from "@material-ui/core";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import VideoModal from "../shared/VideoModal";

const HeroSection = () => {
  return (
    <div>
      <Container style={{ padding: "0" }} maxWidth="lg">
        <div className="top-div">
          <div className="logo-div">
            <img src="/images/logo-new.PNG" alt="logo" className="logo-img" />
          </div>
          <div className="connect-div">Connect Wallet</div>
        </div>

        <Grid container className="bottom-div">
          <Grid item md={6} xs={12}>
            <div className="text-div">
              <div className="header-text">
                The
                <span className="animation-text">
                  <ReactTypingEffect text={["FIRST", "RARE", "BEST"]} />
                </span>
                NFT <br /> Physical KeyChain.
              </div>
              <div className="slogan-text">
                A Physical NFT accessory to display your favourite NFT projects.
              </div>
              <div className="social-icons">
                <IconButton>
                  <a
                    href="https://testnets.opensea.io/assets/0xc073081d0c277ee6c3880326d67f43a7a91e5b31/2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="each-icon"
                      src="/images/opensea.png"
                      style={{ width: "2rem" }}
                      alt=""
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://www.instagram.com/artifactnft/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaInstagram
                      className="each-icon"
                      style={{ fontSize: "2rem", color: "white" }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://twitter.com/ArtifactNFT"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaTwitter
                      className="each-icon"
                      style={{ fontSize: "2rem", color: "#2081E2" }}
                    />
                  </a>
                </IconButton>
              </div>
              <div className="floating-nft">
                <img src="/assets/images/nft-red.png" alt="" />
              </div>
            </div>
          </Grid>
          <Grid item md={6} xs={12} className="hero-box">
            <img alt="Hero-brick" src={`/images/header/nft-clean.png`} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSection;
