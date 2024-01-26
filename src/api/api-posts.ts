import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc, addDoc, getDocs  } from "firebase/firestore"; 
import firebaseConfig from './dbConfig';
import { getFirestore } from "firebase/firestore";
import { IPost } from "interface/Interface";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const createCollection = async () => {
    const post: IPost = {
        headline: `Разработка маркетинговой стратегии KIA Motors`,
        imageName: , 
        type: IType,
        category: ICategory 
    };
    try {
        await setDoc(doc(db, `posts-ru`, `post`), {
            
        })  
    } catch (error) {
        
    };
};

const createPost = async (post: IPost) => {
  try {
    const post = await addDoc
  } catch (error) {
    
  }  
};