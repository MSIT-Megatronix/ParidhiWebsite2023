import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfViewer = () => {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="https://paridhi2023bucket.s3.ap-south-1.amazonaws.com/Python%20certificate%20%281%29.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCmFwLXNvdXRoLTEiRzBFAiA2JWJ0ypI8kuN4B8yGiGHEw9mUJRVBg3kHtUda4BIIqwIhANx6%2BTZtXTe4%2BpIPD%2F3JNFEmAA1g%2Bq8HfTqU0f0zDaxYKoUDCCcQARoMOTQyMDA2NDU0NDE4Igw%2FYf7bluOhpc5GoLMq4gIuCNhQzkmLrbaxbP9hxtsq6Lo5aCoH6Cg%2FXbjRsd%2BQ2vIM5Pg%2BoazRLz0IzbbPDif%2BtGlbRnTexYCt%2FYVrIm8OPuynOSreZ1SWRi04%2BoQoAq7P3j3o5opb4yCf4rFjfBue7evlZglmX7gr07obncJbQllXcC2f3BjvkbNCp0TpYjSPXRgkPwiwbvmw3P6ltNSh5t%2FAUPf9Ej8Wz3o0RJy%2F4704FSLp%2FZa1cJMmHjzNBLtOCZ9ehT8HM22YwED97oHLILC2zHckfuMCtaahM8uEiGOIpdiOLe1ER5a6CRgRXKYi9QVxEXMyZBrzBVxWK4%2BwQkRId8obBtPop2eRGSfzH4eRdP0uKEf0fIjtn%2F3VILb2nZV%2BeAU2K7jvLidVjqxPkjfELPmqZ2EiluM22YWcj%2FIJGC3PzZPIZU4NE%2BpvTo9wBZvTIFNf5oyFuPw3ivRF665WoK1wcnbiCfZx%2By0GvZMwzOWEoQY6swIrLhlpKVicXHwyXMRSkJzc0X6%2F2T7xJq3i6Q3PgrZsy6%2FpPFolpAZwmEzwBc5Tk55q%2BIfUemLVLmE%2BbiyxgpG5efJQibVun7n6ean5Bpjj43rD%2FG9Guy6goInfwaeoMmHkjnnmoGos1IiE0rPrTKZbgkWZRgQGErHnheFaIJN0AkErswbr%2B2b7Qb75CJtwBr4S7eFz86NxXEZeXhavHpDj4LAMH4n6HRx6NkMFE2vx4xEszV9ZDMCbKraZEGFEZAuD3abdcE%2FhI6NeVOIGitIaY9Qs4Y7XJY1Bg1esbRA%2BHodTVUaAPdij7T62PQlcBz82P6nH4qzbTYX5LOw%2BoAbDfK9L9ok6Yxqve82y1g4iI%2FIVlb5rtaJm0sscUobIEw5AdDe2jH7Q%2FatboF9nu1IQ0uK9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230327T075246Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5WU7VZCJOFPLBKH3%2F20230327%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=bb383153a7f8eafdc7a93a285278ebdf707cd6b7b2e1ab8b910b2a4a9691ff3f" />
      </Worker>
    </div>
  );
};

export default PdfViewer;
