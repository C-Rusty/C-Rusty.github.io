import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc, addDoc, getDocs  } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import collections from "../collections/collections";
import { IPost} from "../interface/Interface";
import { postInterfaceFields } from "../locales/ProjectLocalization";
import { firebaseConfig } from "./dbConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const createCollection = async (pageLang: string) => {
  let collectionName: string = ``;

  if (pageLang === `ru`) {
    collectionName = collections.postsRuShort;
  } else if (pageLang === `en`) {
    collectionName = collections.postsEnShort;
  } else {
    throw new Error (`Something wrong. Language is ${pageLang}`);
  };

    try {
        await setDoc(doc(db, collectionName, `Strategy-porter`), {
          headline: `Strategy development in the “Hard” approach: how Porter’s 5 Forces Model is used`,
          types: [`Article`],
          categories: [`Marketing`],
          imageCloudPath: `posts/Strategy-porter.webp` 
        });  
    } catch (error) {
        console.log(error);
    };
};

const getPosts = async (language: string) => {
  let collectionName: string = ``;

  if (language === `ru`) {
    collectionName = collections.postsRuShort;
  } else if (language === `en`) {
    collectionName = collections.postsEnShort;
  } else {
    throw new Error (`Something wrong. Language is ${language}`);
  };
  
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));

    const posts: IPost[] = querySnapshot.docs.map(postDoc => {
      const post = postDoc.data() as IPost;
      return post;
    });

    return posts;

  } catch (error) {
    console.log(error);
  };

};

export const api = {
  getPosts,
  createCollection
}