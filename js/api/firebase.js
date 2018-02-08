import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6EgP7Qxz4BiXCw9z9KL19AYIhAnML_RU",
  authDomain: "daily-app-rn.firebaseapp.com",
  databaseURL: "https://daily-app-rn.firebaseio.com/",
  storageBucket: "daily-app-rn.appspot.com"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

export const addNews = async (article) => {
    firebase.database().ref('news/' + article.publishedAt +  ' ' +article.title ).set({
      source: {
        id: article.source.id,
        name: article.source.name,
      },
      author: article.author,
      description: article.description,
      publishedAt: article.publishedAt,
      title: article.title,
      url: article.url,
      urlToImage: article.urlToImage,
    });
  }

export const fetchNews = async () => {
  let res = await firebase.database().ref('news/').once('value');
  const favNews = Object.values(res.val()).reverse();
  return favNews;
} 

export const addPic = async (pic) => {
  firebase.database().ref('gallery/' + pic.updated_at).set({
    id: pic.id,
    updated_at: pic.updated_at,
    urls: pic.urls, //array
  });
}

export const fetchPic = async () => {
  let res = await firebase.database().ref('gallery/').once('value');
  const favPic = Object.values(res.val()).reverse();
  return favPic;
} 
