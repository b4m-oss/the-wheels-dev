export const modal = () => {
  console.log("Modal is fired.");
  const openers = document.querySelectorAll(".twls-modal-opener");
  openers.forEach((opener) => {
    const targetId = opener.getAttribute("data-twls-modal-open");
    if (targetId) {
      const target = document.getElementById(targetId);
      opener.addEventListener("click", () => {
        target ? (target as HTMLDialogElement).showModal() : "";
        document.body.style.overflow = "hidden";
      });
    }
  });
  const closers = document.querySelectorAll(".twls-modal-closer");
  closers.forEach((closer) => {
    closer.addEventListener("click", () => {
      (closer.closest(".twls-modal") as HTMLDialogElement).close();
      document.body.style.overflow = "scroll";
    });
  });
};
