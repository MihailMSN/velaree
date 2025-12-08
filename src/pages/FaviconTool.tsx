import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Download, Wand2 } from "lucide-react";
import { toast } from "sonner";

export default function FaviconTool() {
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const removeBackground = async () => {
    setProcessing(true);
    try {
      toast.info("Loading AI model... This may take a moment on first run.");
      
      const { pipeline, env } = await import("@huggingface/transformers");
      
      // Configure transformers.js
      env.allowLocalModels = false;
      env.useBrowserCache = true;

      // Load the current favicon
      const response = await fetch("/favicon.png");
      const blob = await response.blob();
      
      // Create image element
      const img = new Image();
      img.src = URL.createObjectURL(blob);
      await new Promise((resolve) => { img.onload = resolve; });

      // Create canvas and draw image
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      
      const imageData = canvas.toDataURL("image/png");

      toast.info("Processing image with AI...");
      
      // Use image segmentation to create mask
      const segmenter = await pipeline(
        "image-segmentation",
        "Xenova/segformer-b0-finetuned-ade-512-512",
        { device: "webgpu" }
      );

      const result = await segmenter(imageData);

      if (!result || !Array.isArray(result) || result.length === 0) {
        throw new Error("Segmentation failed");
      }

      // Create output canvas
      const outputCanvas = document.createElement("canvas");
      outputCanvas.width = canvas.width;
      outputCanvas.height = canvas.height;
      const outputCtx = outputCanvas.getContext("2d")!;
      outputCtx.drawImage(canvas, 0, 0);

      // Get image data and apply mask
      const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
      const data = outputImageData.data;

      // Find the main object mask (invert to keep subject)
      if (result[0]?.mask?.data) {
        for (let i = 0; i < result[0].mask.data.length; i++) {
          const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
          data[i * 4 + 3] = alpha;
        }
      }

      outputCtx.putImageData(outputImageData, 0, 0);

      // Convert to blob URL
      outputCanvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setResultUrl(url);
          toast.success("Background removed successfully!");
        }
      }, "image/png");

    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to process image. Try the simple removal instead.");
      
      // Fallback: Simple white background removal
      await simpleWhiteRemoval();
    } finally {
      setProcessing(false);
    }
  };

  const simpleWhiteRemoval = async () => {
    try {
      const response = await fetch("/favicon.png");
      const blob = await response.blob();
      
      const img = new Image();
      img.src = URL.createObjectURL(blob);
      await new Promise((resolve) => { img.onload = resolve; });

      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Remove white/near-white pixels
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Check if pixel is white or near-white
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // Make transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setResultUrl(url);
          toast.success("White background removed!");
        }
      }, "image/png");
    } catch (error) {
      toast.error("Failed to process image");
    }
  };

  const downloadResult = () => {
    if (resultUrl) {
      const a = document.createElement("a");
      a.href = resultUrl;
      a.download = "favicon-transparent.png";
      a.click();
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-2xl font-bold">Favicon Background Remover</h1>
        
        <div className="flex gap-8 justify-center items-center">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Original</p>
            <div className="w-32 h-32 border rounded-lg flex items-center justify-center bg-[repeating-conic-gradient(#80808022_0%_25%,transparent_0%_50%)] bg-[length:16px_16px]">
              <img src="/favicon.png" alt="Current favicon" className="max-w-full max-h-full" />
            </div>
          </div>

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Result</p>
              <div className="w-32 h-32 border rounded-lg flex items-center justify-center bg-[repeating-conic-gradient(#80808022_0%_25%,transparent_0%_50%)] bg-[length:16px_16px]">
                <img src={resultUrl} alt="Result" className="max-w-full max-h-full" />
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center">
          <Button onClick={removeBackground} disabled={processing}>
            {processing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Remove Background
              </>
            )}
          </Button>

          {resultUrl && (
            <Button variant="outline" onClick={downloadResult}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          )}
        </div>

        <Button variant="ghost" onClick={simpleWhiteRemoval} disabled={processing}>
          Simple white removal (faster)
        </Button>
      </div>
    </div>
  );
}
