import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import TeamCard from "../shared/TeamCard";
import FaqSection from "../shared/FaqSection";
import DoubleHeader from "../shared/DoubleHeader";
import Footer from "../shared/Footer";
import HeroSection from "../shared/HeroSection";
import Dapp from "../shared/Dapp";
import BlogPost from "../shared/blog/BlogPost";
import RoadMapRoot from "../shared/roadmap/RoadMapRoot";
import RoadMapMobile from "../shared/roadmap/RoadMapMobile";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="hero-section">
        <HeroSection />
      </div>
      <Container maxWidth="lg">
        <div className="welcome-div">
          <DoubleHeader
            slogan="Mint An Artifact"
            text="5th Nov, 2021."
            colorH="#2081E2"
          />
        </div>

        <div data-aos="flip-left">
          {/* <img
            width="100%"
            alt="artifact-membership"
            src="/images/DeviceMemberships.gif"
          /> */}
          <Dapp />
        </div>
      </Container>

      <Container style={{ marginTop: "7rem" }} maxWidth="lg">
        <DoubleHeader
          slogan="Trending Topics.. "
          text="Recent Posts"
          colorH="#2081E2"
        />
        <div data-aos="slide-left" className="blog-div">
          <BlogPost
            img="blog1.jpg"
            title="Artifact Marketplace — Profiles for your NFT Accessory"
            post="Introducing the Artifact Marketplace. The world’s newest, most exciting online platform where artists and collectors can show off their collections. Gain access with your membership pass, show the"
            link="https://medium.com/@ArtifactNFT/artifact-marketplace-profiles-for-your-nft-accessory-321398c16361"
          />
          <BlogPost
            img="blog2.jpg"
            title="Introducing the worlds first physical NFT Keychain"
            post="Introducing the Artifact Keychain, the world’s first NFT keychain & the perfect way to display your NFT’s. When I bought my first NFT I immediately wanted a way to show off my new art with the world while also being fashionable. "
            link="https://medium.com/@ArtifactNFT/introducing-the-worlds-first-physical-nft-keychain-66690cdebc74"
          />
          <BlogPost
            img="blog3.jpg"
            title="Bridging NFT’s to physical assets"
            post="NFTs (non-fungible tokens) are undoubtedly the most popular blockchain products of 2021. These unique tokens present a more decentralized way for creators to share their art with fans and collectors."
            link="https://medium.com/@ArtifactNFT/bridging-nfts-to-physical-assets-e77051d064af"
          />
        </div>
      </Container>

      <Container className="team-faq" maxWidth="lg">
        <DoubleHeader
          slogan="Meet Artifact"
          text="Team | FAQ"
          colorH="#2081E2"
        />
        <Grid container>
          <Grid item md={6} xs={12} className="team-div">
            {/* <HeaderText text="Team" color="white" align="left" /> */}
            <div data-aos="zoom-in" className="each-team">
              <TeamCard
                color1="#A2E5F4"
                color2="#0000DE"
                img="/images/team/artifact-team-1.png"
                name="@artifactnft"
                title="Founder"
              />
            </div>

            <div data-aos="zoom-in" className="each-team img-right">
              <TeamCard
                color1="#916D4C"
                color2="#B9C2C6"
                img="/images/team/artifact-team-5.png"
                name="@carriejglenn"
                title="Marketing Expert"
              />
            </div>

            <div data-aos="zoom-in" className="each-team img-right">
              <TeamCard
                color1="#F77F50"
                color2="#85AB80"
                img="/images/team/artifact-team-3.png"
                name="@TheLoftyMom"
                title="Brand Awareness"
              />
            </div>
            <div data-aos="zoom-in" className="each-team">
              <TeamCard
                color1="#538CAD"
                color2="#272B5E"
                img="/images/team/artifact-team-4.png"
                name="@Agho.dev"
                title="Developer"
              />
            </div>
            {/* <div data-aos="zoom-in" className="each-team img-right">
              <TeamCard
                color1="#C1A6BF"
                color2="#599DBA"
                img="/images/team/artifact-team-4.jpg"
                name="@agho.dev"
                title="Developer"
              />
            </div> */}
          </Grid>
          <Grid data-aos="fade-left" item md={5} xs={12} className="faq-div">
            {/* <HeaderText
              className="faq-header"
              text="FAQ"
              color="white"
              align="left"
            /> */}
            <FaqSection />
          </Grid>
        </Grid>
      </Container>

      <Container className="roadmap-div" maxWidth="lg">
        <DoubleHeader slogan="The Journey" text="Road Map" colorH="#2081E2" />
        <div className="web-map">
          <RoadMapRoot />{" "}
        </div>
        <div className="mobile-map">
          {" "}
          <RoadMapMobile id="mobile" />{" "}
        </div>
      </Container>

      <Container className="social-btn" maxWidth="lg">
        <DoubleHeader text="Follow our Socials!!!" colorH="#2081E2" />
        <div data-aos="zoom-out" className="social-links">
          <a
            href="https://twitter.com/ArtifactNFT"
            rel="noreferrer"
            target="_blank"
          >
            <div className="social-links-icon">Twitter</div>
          </a>
          <a href="#">
            <div className="social-links-icon">Opensea</div>
          </a>
          <a
            href="https://medium.com/@ArtifactNFT"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-links-icon">Medium</div>
          </a>
          <a
            href="https://www.instagram.com/artifactnft/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-links-icon">Instagram</div>
          </a>
        </div>
      </Container>

      <Container maxWidth="lg">
        <Footer />
      </Container>
    </div>
  );
}
