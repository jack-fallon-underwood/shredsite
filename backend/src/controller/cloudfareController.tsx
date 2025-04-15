import { S3Client, S3ClientConfig, GetObjectCommand } from "@aws-sdk/client-s3";

// Configure the S3 client (same as above)
const s3Client: S3Client = new S3Client({
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  region: 'auto',
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  },
} as S3ClientConfig);

async function downloadFile(bucketName: string, key: string) {
  const getParams = {
    Bucket: 'shredlogos',
    Key: key,
  };

  try {
    const data = await s3Client.send(new GetObjectCommand(getParams));
    if (data.Body) {
      const fileContent = await data.Body.transformToString(); // Or .transformToByteArray() for binary data
      console.log("File Content:", fileContent);
      return fileContent;
    } else {
      console.log("File not found or empty.");
      return null;
    }
  } catch (err) {
    console.error("Error downloading:", err);
    throw err;
  }
}

async function main() {
  const bucketName = 'shredlogos';
  const fileKey = 'my-file.txt';

  await downloadFile(bucketName, fileKey);
}

main();