import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f76a164291e09ffe89d398cdec6f7455ec7a048d5cf1468fe8cea38e27387358"
  }
});
