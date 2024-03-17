import axios from "axios";
import fs from "fs"; // Importing the fs-extra module for file operations
import { createCanvas, loadImage } from "canvas";
import path from "path";

async function generateAndSaveImages() {
  const images = [];

  for (let i = 0; i < 100; i++) {
    const data = {
      // No need for a specific name
    };

    try {
      const response = await axios.get("https://noun-api.com/beta/pfp?", {
        params: data,
        responseType: "arraybuffer",
      });

      const image = await loadImage(response.data);
      images.push(image);
      console.log(`Image ${i + 1} loaded`);
    } catch (error) {
      console.error(`Error generating image ${i + 1}:`, error);
      continue;
    }
  }

  console.log('Generated images:', images);
  
  return images;
}

async function createCollage(images: any[]) {
  if (images.length === 0) {
    console.error("No images to create collage");
    return;
  }

  const canvasWidth = 1000;
  const canvasHeight = 1000;

  const canvas = createCanvas(canvasWidth, canvasHeight);
  const context = canvas.getContext("2d");

  let x = 0;
  let y = 0;
  images.forEach((image: any) => {
    context.drawImage(image, x, y, canvasWidth / 10, canvasHeight / 10);
    x += canvasWidth / 10;
    if (x >= canvasWidth) {
      x = 0;
      y += canvasHeight / 10;
    }
  });

  // Save the collage as an image file using fs-extra
  const collagePath = 'collage.png';
	const publicDirectory = path.join(process.cwd(), 'public');
	if (!fs.existsSync(publicDirectory)) {
		fs.mkdirSync(publicDirectory);
	  }
	  fs.writeFileSync(collagePath, canvas.toBuffer());
	  console.log(`Collage saved at ${collagePath}`);
}

export default async function generateImagesAndCreateCollage() {
  const images = await generateAndSaveImages();
  await createCollage(images);
}

