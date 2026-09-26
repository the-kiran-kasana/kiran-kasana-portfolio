export const RESUME_VIEW = "https://drive.google.com/file/d/1QScWP98w_N2Xm0DfGI9WgpY5Nrk6X7oM/view?usp=sharing";
const RESUME_FILE = "/Kiran_Kasana_Resume.pdf";

export function openAndDownloadResume(e) {
  e.preventDefault();
  window.open(RESUME_VIEW, "_blank", "noopener,noreferrer");

  const link = document.createElement("a");
  link.href = RESUME_FILE;
  link.download = "Kiran_Kasana_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
}
