import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Modal, Box, Button, Slider, CircularProgress } from "@mui/material";
import styled from "styled-components";

// Type for cropped area pixels
interface CroppedArea {
  width: number;
  height: number;
  x: number;
  y: number;
}

// Props for ImageCropperModal component
interface ImageCropperModalProps {
  open: boolean;
  handleClose: () => void;
  imageSrc: string;
  onCropComplete: (croppedImageUrl: string) => void;
  aspect: number;
  shape: "rect" | "round";
  loading?: boolean;
}

const CropperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: #333;
`;

const Controls = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ImageCropperModal: React.FC<ImageCropperModalProps> = ({
  open,
  handleClose,
  imageSrc,
  onCropComplete,
  aspect,
  shape,
  loading,
}) => {
  const getCroppedImg = async (
    imageSrc: string,
    crop: CroppedArea | null
  ): Promise<string> => {
    const createImage = (url: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => reject(error));
        image.src = url;
      });

    if (!crop) {
      throw new Error("Crop area is not defined");
    }

    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Failed to get canvas context");
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    return base64Image;
  };

  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<CroppedArea | null>(null);

  const onCropCompleteCallback = useCallback(
    (croppedArea: any, croppedAreaPixels: CroppedArea) => {
      setCroppedAreaPixels(croppedAreaPixels);
      console.log(croppedArea);
    },
    []
  );

  const handleCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
      onCropComplete(croppedImageUrl);
    }
    // if (!loading) {
    //   handleClose();
    // }
  };

  return (
    <Modal open={open} onClose={loading ? () => {} : handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
          bgcolor: loading ? "transparent" : "background.paper",
          boxShadow: loading ? 0 : 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {imageSrc &&
          (loading ? (
            <div className="h-[100%] w-[100%] flex justify-center items-center ">
              <CircularProgress sx={{ color: "#2B6EF6" }} />
            </div>
          ) : (
            <>
              <CropperContainer>
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={aspect}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropCompleteCallback}
                  cropShape={shape}
                />
              </CropperContainer>
              <Controls>
                <Slider
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="zoom-slider"
                  onChange={(e, zoom) => {
                    setZoom(zoom as number), console.log(e);
                  }}
                  sx={{
                    color: "#4C6156",
                    "& .MuiSlider-thumb": {
                      borderRadius: "50%",
                      backgroundColor: "#4C6156",
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#4C6156",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#d3d3d3",
                    },
                  }}
                />
                <div className="w-[100%]  flex gap-5 justify-center">
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{
                      backgroundColor: "#2B6EF6",

                      color: "#ffffff",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleCrop}
                    sx={{
                      backgroundColor: "#2B6EF6",

                      color: "#ffffff",
                    }}
                  >
                    Save
                  </Button>
                </div>
              </Controls>
            </>
          ))}
      </Box>
    </Modal>
  );
};

export default ImageCropperModal;
