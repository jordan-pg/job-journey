import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { generatePDF } from "./utils/pdfGenerator";
import { populateTemplate } from "./utils/templateEngine";
import { initializeApp } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

// Initialize Firebase Admin SDK
initializeApp();

export const generateResumePDF = onRequest(async (request, response) => {
    try {
        if (request.method === "OPTIONS") {
            // Handle CORS Pre-Flight
            response.set("Access-Control-Allow-Origin", "*");
            response.set("Access-Control-Allow-Methods", "GET, POST");
            response.status(204).send("");
        } else if (request.method === "POST") {
            const body = request.body;
            const htmlContent = await populateTemplate(body.data, body.type);
            const pdfBuffer = await generatePDF(htmlContent);

            // Save the PDF to Firebase Storage
            const bucket = getStorage().bucket(); // Default bucket
            const fileName = `resumes/${body?.data?.name}_resume_${Date.now()}.pdf`;
            const file = bucket.file(fileName);

            await file.save(pdfBuffer, {
                metadata: { contentType: "application/pdf" },
            });

            // Get the download URL of the saved PDF
            try {
                const [downloadURL] = await file.getSignedUrl({
                    action: "read",
                    expires: "03-09-2491",
                });
                response.status(200).send({ downloadURL });
            } catch (urlError) {
                logger.error("Error generating signed URL", urlError);
                response.status(500).send("Error generating download link");
            }
        } else {
            response.status(405).send("Method Not Allowed");
        }
    } catch (error) {
        logger.error(error);
        response.status(500).send("Internal Server Error");
    }
});
