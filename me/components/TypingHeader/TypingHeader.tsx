export default function TypingHeader() {
  var i = 0;
  var txt = "Lorem ipsum typing effect!"; /* The text */
  var speed = 50; /* The speed/duration of the effect in milliseconds */
  let resume: any = ''

  if (typeof document !== "undefined") {
    resume = (document.querySelector("#sobre") as HTMLParagraphElement)
  }

  function typeWriter() {
    if (i < txt.length) {
      resume.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <>
      {typeWriter()}
      <p id="sobre"></p>
    </>
  );
}
