
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBdxNRXrakInQ-MBpbbZ6f2uHH8V2YzP0U",
  authDomain: "chatzy-gs.firebaseapp.com",
  projectId: "chatzy-gs",
  storageBucket: "chatzy-gs.firebasestorage.app",
  messagingSenderId: "868797378114",
  appId: "1:868797378114:web:f1f4b8bf3bc6c22d7a87db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(username,email ,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using Chatzy",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatsData:[]
        })
    }
    catch (error){
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch (error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
    
}
const logout = async () => {
    try{
        await signOut(auth)
    }catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}
export {signup,login,logout,auth,db}