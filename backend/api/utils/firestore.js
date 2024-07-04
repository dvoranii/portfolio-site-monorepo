import Firestore from "@google-cloud/firestore";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let firestore;

async function initializeFirestore() {
  let serviceAccount;

  try {
    if (process.env.NODE_ENV === "production") {
      console.log(process.env.NODE_ENV);
      console.log(
        "FIREBASE_SERVICE_ACCOUNT:",
        process.env.FIREBASE_SERVICE_ACCOUNT
      );
      const base64String = process.env.FIREBASE_SERVICE_ACCOUNT;
      console.log(base64String);

      if (base64String) {
        const decodedString = Buffer.from(base64String, "base64").toString(
          "utf8"
        );
        serviceAccount = JSON.parse(decodedString);
        console.log(serviceAccount);
      } else {
        throw new Error("FIREBASE_SERVICE_ACCOUNT not found in .env file");
      }
    } else {
      const serviceAccountPath = resolve(
        __dirname,
        "../config/serviceAccount.json"
      );
      const data = await fs.readFile(serviceAccountPath, "utf-8");
      serviceAccount = JSON.parse(data);
    }
  } catch (error) {
    console.error("Error initializing Firestore:", error);
    throw error;
  }

  firestore = new Firestore({
    projectId: serviceAccount.project_id,
    credentials: serviceAccount,
  });

  console.log("Firestore initialized successfully");

  try {
    const testDoc = await firestore.collection("submissions").limit(1).get();
    console.log(
      "Firestore test query successful, documents found:",
      testDoc.size
    );
  } catch (error) {
    console.error("Error executing Firestore test query:", error);
  }
}

initializeFirestore().catch((error) => {
  console.error("Error initializing Firestore:", error);
  // Handle initialization failure (e.g., exit process, retry, etc.)
});

export default async function saveFormSubmission(submissionData) {
  if (!firestore) {
    throw new Error("Firestore is not initialized");
  }

  try {
    const docRef = firestore.collection("submissions").doc();
    await docRef.set({
      ...submissionData,
      timestamp: new Date(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Error saving form submission: ", error);
    throw error;
  }
}
