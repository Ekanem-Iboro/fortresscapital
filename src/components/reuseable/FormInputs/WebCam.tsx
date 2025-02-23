/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef } from "react";

const useWebcam = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [error, setError] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [fileList, setFileList] = useState<File[] | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsStreamActive(true);
        setError("");
      }
    } catch (err) {
      setError(
        "Failed to access webcam. Please ensure you have granted camera permissions."
      );
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setIsStreamActive(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current && isStreamActive) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "captured_image.jpg", {
              type: "image/jpeg",
            });
            setFileList([file]);

            setCapturedImage(URL.createObjectURL(file));
          }
        }, "image/jpeg");
      }
      stopCamera();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileList([file]);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setCapturedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    capturedImage,
    error,
    videoRef,
    startCamera,
    stopCamera,
    captureImage,
    handleFileChange,
    isStreamActive,
    setCapturedImage,
    setFileList,
    fileList,
  };
};

export default useWebcam;
