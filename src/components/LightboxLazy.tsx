"use client";

import Lightbox, {
  type SlideImage,
} from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

interface Props {
  open: boolean;
  index: number;
  close: () => void;
  slides: SlideImage[];
}

export default function LightboxLazy({ open, index, close, slides }: Props) {
  return (
    <Lightbox
      open={open}
      index={index}
      close={close}
      slides={slides}
      plugins={[Captions]}
      captions={{ descriptionTextAlign: "start" }}
      controller={{ closeOnBackdropClick: true }}
    />
  );
}
