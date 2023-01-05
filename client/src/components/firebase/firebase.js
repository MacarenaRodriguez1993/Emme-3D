import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyCQ1Jk6GB0wj8GGXIM69dl5DamoMyGdN94",
    authDomain: "practica-22c7a.firebaseapp.com",
    projectId: "practica-22c7a",
    storageBucket: "practica-22c7a.appspot.com",
    messagingSenderId: "498999836198",
    appId: "1:498999836198:web:18b6294fcf50ad7173b0e7",
    measurementId: "G-WBY4B1KBLR",
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }
