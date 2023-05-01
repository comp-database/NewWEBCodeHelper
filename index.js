const userName = document.getElementById("name");
const marks = document.getElementById("marks");
const submitBtn = document.getElementById("submitBtn");

const { PDFDocument, rgb, degrees } = PDFLib;

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

submitBtn.addEventListener("click", () => {
  // For Name
  const val = capitalize(userName.value);

  // For Marks
  const marksval = marks.value;

  // Check if both values are valid
  if (
    val.trim() !== "" &&
    userName.checkValidity() &&
    marksval.trim() !== "" &&
    marks.checkValidity()
  ) {
    // Generate the PDF document with both name and marks
    generatePDF(val, marksval);
  } else {
    // Display an error message if either value is invalid
    if (val.trim() === "" || !userName.checkValidity()) {
      userName.reportValidity();
    }
    if (marksval.trim() === "" || !marks.checkValidity()) {
      marks.reportValidity();
    }
  }
});

const generatePDF = async (name, marks) => {
  const existingPdfBytes = await fetch("./cert.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  //get font
  const fontBytes = await fetch("./Belleza-Regular.ttf").then((res) =>
    res.arrayBuffer()
  );

  // Embed our custom font in the document
  const BellezaFont = await pdfDoc.embedFont(fontBytes);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw the name and marks on the certificate
  firstPage.drawText(name, {
    x: 270,
    y: 280,
    size: 58,
    font: BellezaFont,
    color: rgb(0, 0, 0),
  });

  firstPage.drawText(`${marks}`, {
    x: 360,
    y: 230,
    size: 30,
    font: BellezaFont,
    color: rgb(0, 0, 0),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;

  var file = new File([pdfBytes], "Code Helper(Certificate)", {
    type: "application/pdf;charset=utf-8",
  });
  saveAs(file);
};

// init();

