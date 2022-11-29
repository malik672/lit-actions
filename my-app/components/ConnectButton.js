import { ConnectButton as Connect } from "@rainbow-me/rainbowkit";

function ConnectButton() {

 const add = () => {
   const doc = document.querySelector(".form");
   doc.style.display = "flex";
 }

  return (
    <div style={{ display: "flex" }}>
      <Connect
        label="Login"
        showBalance={false}
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "avatar",
        }}
      />
    </div>
  );
}

export default ConnectButton;