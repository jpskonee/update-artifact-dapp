import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function SelectionCard() {
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
    } else if (typeCLicked === "r") {
      setSize(rSize);
    }
  };
  return (
    <div className="selection-div">
      <div className="selection-btn">
        <span style={{ color: "#1291db" }}> Sizes:</span>
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              value={type}
              onChange={handleChange}
              row
              name="size-type"
            >
              <FormControlLabel value="x" control={<Radio />} label="3.2inch" />
              <FormControlLabel value="r" control={<Radio />} label="2.4inch" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="selection-title">Artifact NFT Accessory</div>
      <div className="selection-desc">
        <span>About:</span>The Artifact NFT Accessory is a unique way to display
        your NFT collections in real life. This is a limited first collection of
        Artifacts plus membership to the Artifact Marketplace where collectors
        and project owners can come together to display, advertise, and
        celebrate their favorite NFT's across all marketplaces. Each NFT is
        redeemable for: (1) physical Artifact Accessory and; <br /> (2)
        membership pass for access to Artifact Marketplace and exclusive member
        benefits{" "}
      </div>
      <div className="selection-prop">
        <span> Features:</span> Original Member, {size.name} ({size.size}),
        Verified Access, Redeemable, Color: Black, Physical Accessory
      </div>
      <div className="selection-amount-price">
        <div className="selection-amount">
          <span>Total Amount:</span> {size.amount}
        </div>
        <div className="selection-price">
          <span>Per Unit: </span>
          <img src="/images/eth.svg" alt="eth-logo" />
          {size.price}
        </div>
      </div>
      {/* <div className="selection-footnote">
        Get it all at every single click!
      </div> */}
    </div>
  );
}

// Got the NFT artwork sending shortly, also keeping the price the same but changing supply slightly 1399 units of the small one and 999 units of the bigger one!
// also 1200 need to have the attribute of 2.4 inch and another with 3.2 inch attribute

// small version will be priced at .05

// big version at .07

export default SelectionCard;
