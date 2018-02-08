import Unsplash, { toJson } from 'unsplash-js/native';

const unsplash = new Unsplash({
 applicationId: "80a1cc032bbd5bac93c82e1d5fa55832b8086670d50ecb970ce219f793a373d0",
 secret: "b456c2bc816428dbe3763cc6a9c2ba00975b781cf9a601351e680467e9e7d273",
 callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});


//get random phtots 
export const getRandomPicSplash = async (page, perPage, orderBy) => {
    const randomPage = Math.floor(Math.random() * 100)
    const res = await unsplash.photos.listPhotos(randomPage, 8, "latest");
    const data = toJson(res);
    return data;
}