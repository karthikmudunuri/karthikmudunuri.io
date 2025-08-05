// get-refresh-token.js
import axios from "axios";
import qs from "querystring";

// Replace these with your values
const clientId = "145406a611014f238b1250ae157d3508";
const clientSecret = "8c690779df634bbeb59c29fd74b7bc96";
const redirectUri = "https://www.karthikmudunuri.io/callback"; // Must match exactly with Spotify app settings
const code = "AQCa_44KaGzKaXruMrW3jyQm2OG58RFflYFVLShMZaGo62a9tPtxlA2OdlHuH6Jm9wPzJOJl6L9gQ7Zz7bM-JT5GwOfWRaWr3Gs5TZfdk7s2tLGlEW9lPA32XX_lqGbhZLVaMo2qDbiOz4HxtXNMVC-Bv8xGu2VToikoR48sxYN_5-8MVfOmYCVB3CoCzD5UwERURM1ywISlwHbD6TZx9_P66qYdsLpcnyGUkHgHVGuPIHhX6eoBXrnSHbsvnz3BM2_rKtoOR45l3vzmttvX5oQ3FhmhhQAWLvW8E3Bf4LyLVJ_sKVYOzFHXcXryAK58vSlmrCyozyfqHBVGR1-_3RYnmoigDS5gyqB_VVeTTmV-2Mrd5JeizI4"; // The one you received in the URL after auth

async function getRefreshToken() {
  const data = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
  };

  const headers = {
    Authorization:
      "Basic " +
      Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      { headers }
    );

    console.log("Access Token:", response.data.access_token);
    console.log("Refresh Token:", response.data.refresh_token);
  } catch (err) {
    console.error("Error fetching token:", err.response.data);
  }
}

getRefreshToken();
