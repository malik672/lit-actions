import { ethers, utils } from "ethers";

//to use window.ethereum as provider
const home = typeof window !== "undefined" ? window.ethereum : "";

export const check = async (address, events) => {
  const filter = {
    address: `${address}`,
    topics: [
      // the name of the event, parnetheses containing the data type of each event, e.g illonis(address,uint256,string)
      utils.id(events),
    ],
  };

  const red = await new ethers.providers.Web3Provider(home);
  const blu = red.on(filter, () => {
    console.log("Open + open + red");
  });
};
