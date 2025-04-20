import { useState } from "react";

export const QrCode = () => {
  let [img, setImg] = useState("");
  let [loading, setLoading] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const [qrsize, setQrsize] = useState("");

  async function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrcode)}`;
      setImg(url);
    } catch (error) {
      console.log("Error generating QR Code ", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "QR Code.png";
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.log("Error downloading QR Code", error);
      });
  }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      <div className="main-content">
        {loading && <p className="wait">Generating...</p>}
        {img && <img src={img} alt="QR Code" className="qr-code-image" />}
        <div className="input-container">
          <label htmlFor="dataInput" className="input-label">Data for QR Code:</label>
          <input
            type="text"
            value={qrcode}
            id="dataInput"
            placeholder="Enter Link for QR Code"
            onChange={(event) => setQrcode(event.target.value)}
          />
          <label htmlFor="sizeInput" className="input-label">Image size (e.g., 170):</label>
          <input
            type="text"
            value={qrsize}
            id="sizeInput"
            placeholder="Enter Size for QR Code"
            onChange={(event) => setQrsize(event.target.value)}
          />
          <div className="button-container">
            <button className="generate" disabled={loading} onClick={generateQR}>Generate</button>
            <button className="download" onClick={downloadQR}>Download</button>
          </div>
        </div>
        <p className="footer">
          Designed by <a href="https://www.linkedin.com/in/arjunaadhith5">Arjun Aadhith</a>
        </p>
      </div>
    </div>
  );
};
