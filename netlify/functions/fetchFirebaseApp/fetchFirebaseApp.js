import { initializeApp } from '@firebase/app'

const handler = async (event) => {
  try {
    const firebaseConfig = {
      apiKey: process.env.C2T__API_KEY,
      authDomain: "cart2table-1dd25.firebaseapp.com",
      projectId: "cart2table-1dd25",
      storageBucket: "cart2table-1dd25.appspot.com",
      messagingSenderId: "257185387712",
      appId: "1:257185387712:web:1fae6a58c6caf3d5a74925"
    };
    
    const app = initializeApp(firebaseConfig);
    return {
      statusCode: 200,
      body: JSON.stringify({reply:app}),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
