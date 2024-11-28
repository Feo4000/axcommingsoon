// import React, { useState } from "react";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   query,
//   where,
// } from "firebase/firestore";
// import "./App.css";
// // Добавяме вашия CSS файл
//
// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAXqZ_H-3zZjQLe__38uo3V4vJyCtzU25o",
//   authDomain: "axcommingsoon.firebaseapp.com",
//   projectId: "axcommingsoon",
//   storageBucket: "axcommingsoon.appspot.com",
//   messagingSenderId: "724398261459",
//   appId: "1:724398261459:web:312eff6d67ce3459644026",
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
//
// const App = () => {
//   const [email, setEmail] = useState(""); // Държим текущия имейл
//   const [message, setMessage] = useState(""); // Показваме съобщения за успех или грешка
//
//   // Функция за проверка дали имейлът вече съществува
//   const isEmailAlreadyRegistered = async (email) => {
//     const q = query(collection(db, "emails"), where("email", "==", email));
//     const querySnapshot = await getDocs(q);
//     return !querySnapshot.empty; // Ако резултатът не е празен, имейлът вече съществува
//   };
//
//   // Функция за обработка на формуляра
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//
//     if (validateEmail(email)) {
//       try {
//         // Проверяваме дали имейлът вече съществува
//         const emailExists = await isEmailAlreadyRegistered(email);
//         if (emailExists) {
//           setMessage("This email is already registered.");
//           return;
//         }
//
//         // Добавяме имейл в Firestore
//         await addDoc(collection(db, "emails"), { email });
//         setMessage("Thank you! Your email has been saved.");
//         setEmail(""); // Изчистваме текстовото поле
//       } catch (error) {
//         console.error("Error saving email: ", error);
//         setMessage("Error: Could not save your email.");
//       }
//     } else {
//       setMessage("Please enter a valid email address.");
//     }
//   };
//
//   // Функция за валидиране на имейл адреса
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };
//
//   return (
//       <div className="container-size">
//         <div className="container">
//           <header className="header">
//             <img className="logo" src="img/logo-long.png" alt="AnnotateX Logo" />
//             <div className="social">
//               <a href="#" className="social-link">
//                 <img src="img/facebook.png" alt="Facebook" />
//               </a>
//               <a href="#" className="social-link">
//                 <img src="img/x.png" alt="X" />
//               </a>
//               <a href="#" className="social-link">
//                 <img src="img/instagram.png" alt="Instagram" />
//               </a>
//             </div>
//           </header>
//           <main className="content">
//             <div className="announcement">
//               <h2>Coming soon</h2>
//               <h1>GET NOTIFIED WHEN WE WILL LAUNCH!</h1>
//               <form className="subscribe-form" onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     id="emailInput"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Subscribe</button>
//               </form>
//               {message && <p className="message">{message}</p>}
//             </div>
//             <div className="illustration">
//               <img src="img/illustration.png" alt="Coming soon illustration" />
//             </div>
//           </main>
//         </div>
//       </div>
//   );
// };
//
// export default App;
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import "./App.css";

// Импортиране на изображения
import logo from "./img/logo-long.png";
import facebookIcon from "./img/logo-facebook.svg";
import xIcon from "./img/logo-X.svg";
import instagramIcon from "./img/logo-instagram.svg";
import illustration from "./img/illustration.png";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXqZ_H-3zZjQLe__38uo3V4vJyCtzU25o",
  authDomain: "axcommingsoon.firebaseapp.com",
  projectId: "axcommingsoon",
  storageBucket: "axcommingsoon.appspot.com",
  messagingSenderId: "724398261459",
  appId: "1:724398261459:web:312eff6d67ce3459644026",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmailAlreadyRegistered = async (email) => {
    const q = query(collection(db, "emails"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      try {
        const emailExists = await isEmailAlreadyRegistered(email);
        if (emailExists) {
          setMessage("This email is already registered.");
          return;
        }

        await addDoc(collection(db, "emails"), { email });
        setMessage("Thank you! Your email has been saved.");
        setEmail("");
      } catch (error) {
        console.error("Error saving email: ", error);
        setMessage("Error: Could not save your email.");
      }
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSocialClick = (platform) => {
    switch (platform) {
      case "facebook":
        window.open("https://www.facebook.com/profile.php?id=61569924412156", "_blank");
        break;
      case "x":
        window.open("https://x.com/annotatex", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com/annotatex/profilecard", "_blank");
        break;
      default:
        break;
    }
  };

  return (
      <div className="container-size">
        <div className="container">
          <header className="header">
            <img className="logo" src={logo} alt="AnnotateX Logo" />
            <div className="social">
              <img
                  className={"social-link"}
                  src={facebookIcon}
                  alt="Facebook"
                  onClick={() => handleSocialClick("facebook")}
                  style={{ cursor: "pointer" }}
              />
              <img
                  className={"social-link"}
                  src={xIcon}
                  alt="X"
                  onClick={() => handleSocialClick("x")}
                  style={{ cursor: "pointer" }}
              />
              <img
                  className={"social-link"}
                  src={instagramIcon}
                  alt="Instagram"
                  onClick={() => handleSocialClick("instagram")}
                  style={{ cursor: "pointer" }}
              />
            </div>
          </header>
          <main className="content">
            <div className="announcement">
              <h2>Coming soon</h2>
              <h1>GET NOTIFIED WHEN WE WILL LAUNCH!</h1>
              <form className="subscribe-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="emailInput"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
              </form>
              {message && <p className="message">{message}</p>}
            </div>
            <div className="illustration">
              <img src={illustration} alt="Coming soon illustration" />
            </div>
          </main>
        </div>
      </div>
  );
};

export default App;
