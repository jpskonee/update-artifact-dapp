import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { connectB } from "../../redux/blockchain-big/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import eth from "../../assets/images/eth.svg";
import { Grid } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AlarmIcon from "@material-ui/icons/Alarm";
import Countdown from "react-countdown";
import ColourTag from "./ColourTag";
import SelectionCard from "./SelectionCard";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function Dapp() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);
  const [_amount, setAmount] = useState(1);

  console.log(Date.now());
  //frontend state
  const xSize = {
    name: "X type",
    price: 0.07,
    amount: 999,
    size: "3.2inch",
  };
  const rSize = {
    name: "R type",
    price: 0.045,
    amount: 1399,
    size: "2.4inch",
  };

  const [type, setType] = useState("x");
  const [size, setSize] = useState(xSize);

  const handleChange = (e) => {
    e.preventDefault();
    const typeCLicked = e.target.value;
    setType(typeCLicked);
    if (typeCLicked === "x") {
      setSize(xSize);
      dispatch(connectB());
      // setContract("0x70c4A5B81E1B32B22dBDEC12F4662d593e66ADfa");
    } else if (typeCLicked === "r") {
      setSize(rSize);
      dispatch(connect());
      // setContract("0x768c649118296482Cbb8620f69571830411C8ea7");
    }
  };

  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Artifacts...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        gasLimit: "285000",
        to: "",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (size.price * _amount).toString(),
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "WOW, you now own a Artifacts. go visit Opensea.io to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.smartContract, dispatch]);

  return (
    <div className="shop-base" id="connect">
      {blockchain.account === "" || blockchain.smartContract === null ? (
        <Grid
          style={{
            display: "flex",
            jusitfyContents: "center",
            alignItems: "top",
            border: "1px lightgray groove",
            padding: "0.5rem 0.5rem 1.2rem",
          }}
          container
        >
          <Grid item lg={7} md={6} xs={12}>
            {" "}
            <div
              className="connect-div wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.7s"
            >
              <img
                className="connect-img"
                alt="logo"
                src="/images/DeviceMemberships.gif"
              />
            </div>
          </Grid>
          <Grid item lg={5} md={6} xs={12}>
            <SelectionCard />
          </Grid>
          <div className="connect-btn-div">
            <div className="connect-title">Mint Artifacts</div>
            <div className="connect-desc">Connect to the Ethereum network</div>
            <div
              onClick={(e) => {
                e.preventDefault();
                dispatch(connectB());
              }}
              style={{ marginTop: "0.8rem" }}
            >
              <ColourTag
                color1="#131DF4"
                color2="#131DF4"
                text="Connect Wallet"
              />
            </div>
            {blockchain.errorMsg !== "" ? (
              <div className="connect-error-msg">{blockchain.errorMsg}</div>
            ) : null}
          </div>
        </Grid>
      ) : (
        <Grid className="mint-div" container>
          <Grid item lg={7} md={6} xs={12}>
            <img
              className="mint-img"
              alt="logo"
              src="/images/DeviceMemberships.gif"
            />
          </Grid>
          <Grid item lg={5} md={6} xs={12}>
            {Number(data.totalSupply) == 5555 ? (
              <div className="mint-sales-end">
                <div>The sale has ended.</div>
                <div>
                  You can still find Artifacts on{" "}
                  <a target={"_blank"} href={"Opensea"} rel="noreferrer">
                    Opensea.io
                  </a>
                </div>
              </div>
            ) : (
              <div className="mint-details">
                <div className="mint-detail-title"> Artifact NFT Accessory</div>
                <div className="mint-detail-powered">
                  {" "}
                  Powered by:
                  <CheckCircleIcon style={{ color: "#2081e2" }} />
                </div>

                <div className="mint-details-date">
                  <AlarmIcon style={{ fontSize: "2.5rem" }} />
                  <span className="mint-details-date-text">
                    Sales ends in: <Countdown date={"14 November, 2021"} />
                  </span>
                </div>

                <div className="selection-btn">
                  <span style={{ color: "#1291db", paddingLeft: "0.5rem" }}>
                    {" "}
                    Sizes
                  </span>
                  <div>
                    <FormControl component="fieldset">
                      <RadioGroup
                        value={type}
                        onChange={handleChange}
                        row
                        name="size-type"
                      >
                        <FormControlLabel
                          value="x"
                          control={<Radio />}
                          label="X-Type"
                        />
                        <FormControlLabel
                          value="r"
                          control={<Radio />}
                          label="R-Type"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>

                <div className="mint-current-price-div">
                  <div
                    style={{
                      display: "flex",
                      jusitfyContents: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="mint-current-price-heading">
                      Current Price
                      <div className="mint-current-price-icon">
                        <img
                          style={{ width: "1rem" }}
                          alt="eth icon"
                          src={eth}
                        />
                        <div className="mint-current-price-fee">
                          {" "}
                          {size.price}{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: "2rem",
                      }}
                    >
                      Available Supply
                      <div className="mint-supply">
                        {data.totalSupply}/{size.amount}
                      </div>
                    </div>
                  </div>
                  <div className="mint-current-price-extra">
                    <div style={{ marginLeft: "1rem" }}>
                      *excluding gas fee.
                    </div>
                    <div style={{ color: "lightblue", fontSize: "0.8rem" }}>
                      {feedback}
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <form action="">
                      <Grid className="mint-counter-base" container>
                        <Grid item md={7} sm={7} xs={12}>
                          <div className="mint-counter-total-title">
                            Number of Artifact
                          </div>
                          <div className="mint-counter-div">
                            <div
                              className="mint-counter-btn nc-btn"
                              onClick={() => {
                                if (_amount > 1) {
                                  setAmount(_amount - 1);
                                }
                              }}
                            >
                              -
                            </div>
                            <div className="mint-counter-amount">
                              {" "}
                              {_amount}{" "}
                            </div>
                            <div
                              className="mint-counter-btn nc-btn"
                              onClick={() => {
                                if (_amount < 30) {
                                  setAmount(_amount + 1);
                                }
                              }}
                            >
                              +
                            </div>
                          </div>
                        </Grid>
                        <Grid item md={5} sm={5} xs={12}>
                          <div className="mint-counter-total">
                            <div className="mint-counter-total-title">
                              Sum Total
                            </div>
                            <div className="mint-counter-total-img-div">
                              <img
                                style={{ width: "1rem" }}
                                alt="eth icon"
                                src={eth}
                              />
                              <div
                                style={{ marginLeft: "1rem" }}
                                className="mint-counter-amount"
                              >
                                {" "}
                                {(size.price * _amount).toFixed(4)}{" "}
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>

                      <div className="mint-counter-buy-div">
                        <button
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs(_amount);
                          }}
                          className="mint-counter-buy-btn nc-btn"
                        >
                          {claimingNft ? "BUSY" : `BUY ${_amount}`}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </Grid>
          <div className="mint-foot-note">
            <div>
              *Please make sure you are connected to the right network
              (Ethereum) and the correct address. Please note: Once you make the
              purchase, you cannot undo this action. *We have set the gas limit
              to 285000 for the contract to successfully mint your NFT. We
              recommend that you don't change the gas limit.
            </div>
          </div>
        </Grid>
      )}
    </div>
  );
}

export default Dapp;
