export const authEndpoint = "http://accounts.spotify.com/authorize";
const redirectUri = "https://romamykhalchuk.github.io/spotify_clone/";
const clientId = "e250c14aef2e40e5b027154f126f9920";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


//BQCzPsH3Kqee4Tf05o4iuU-9TxQ-LbNitO-jj29tLdIIjAZ4b2D-ONwfXnkzixafpPAlSfOPNaspdcVj6QUxpH3F8JbwmyxZkXN0QhqRr3vEkNVeZoabz3u4eJRdufOpg3FTo-lg4TsDxMccvmnGIT7gxVnuwZAD0spVUJbEUyUcGXqt8dtl