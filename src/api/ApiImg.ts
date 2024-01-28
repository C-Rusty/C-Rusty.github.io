import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();
const storageRefImg = ref(storage, `posts/kia-strategy.webp`);

const uploadImage = (file: File) => {
    uploadBytes(storageRefImg, file).then(() => {
        console.log(`uploaded!`);
    });
};

const downloadImage = async (imgCloudUrl: string) => {
    try {
        const response = getDownloadURL(ref(storage, imgCloudUrl));
        return response;
    } catch (error) {
        console.log(error);
    };
};

export const apiImg = {
    uploadImage,
    downloadImage
};

