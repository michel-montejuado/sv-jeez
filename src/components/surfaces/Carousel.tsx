import { type ReactNode, useState } from "react";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";

export type CarouselProps = {
  cards: ReactNode[];
}

export default function Carousel({ cards }: CarouselProps) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = cards.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, mx: "auto" }}>
      <Box sx={{ minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {cards[activeStep]}
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={maxSteps <= 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={maxSteps <= 1}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
        sx={{ justifyContent: "center", mt: 2 }}
      />
    </Box>
  );
}
