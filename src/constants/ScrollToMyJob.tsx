export default function ScrollToMyJob() {
    const elem = document.getElementById("MyJob")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  return ScrollToMyJob
}