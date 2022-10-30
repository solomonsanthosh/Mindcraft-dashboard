import axios from "axios";
const baseUrl = "https://mind-craft-server.herokuapp.com";

export const getCoach = async () => {
  return await axios.get(`${baseUrl}/getcoach`);
};

export const getActivity = async () => {
  return await axios.get(`${baseUrl}/getactivities`);
};
export const getMusic = async () => {
  return await axios.get(`${baseUrl}/getmusics`);
};
export const createCoach = async (name, email, experience, about, fee) => {
  console.log("kok");
  await axios.post(`${baseUrl}/createcoach`, {
    name: name,
    email: email,
    experience: experience,
    about: about,
    fee: fee,
  });
};

export const postMusic = async (song, topic , link) => {
  console.log("kok");
  await axios.post(`${baseUrl}/addmusic`, {
    song: song,
    topic:topic,
    link:link
  });
};
export const postActivity = async (title, topic , duration) => {
  console.log("kok");
  await axios.post(`${baseUrl}/addactivity`, {
    title: title,
    topic:topic,
    duration:duration
  });
};