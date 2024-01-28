import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc, addDoc, getDocs  } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./DbConfig";
import collections from "../collections/collections";
import { IPost} from "../interface/Interface";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const createCollection = async () => {
  const collectionName = collections.postsRuShort;

    try {
        await setDoc(doc(db, collectionName, `KIA-strategy`), {
          headline: `Разработка маркетинговой стратегии KIA Motors`,
          types: [`Cтатья`, `Кейс`],
          categories: [`Маркетинг`, `Стратегия`],
          imageCloudPath: `posts/kia-strategy.webp` 
        });  
    } catch (error) {
        console.log(error);
    };
};

const getPosts = async () => {
  
  const collectionName = collections.postsRuShort;
  
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