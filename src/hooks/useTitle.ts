import React from "react";

let prevTitle: string = document.title.split(" | ")[0];
let newTitle: string;

const useTitle = (title: string) => {
  const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

  async function deleteAnimation() {
    for (var i = 0; i < prevTitle.length; i++) {
      newTitle = newTitle.slice(0, -1);
      document.title = `${newTitle} | Hartaithan.`;
      await timer(300);
    }
  }

  async function writeAnimation() {
    const array = Array.from(title);
    let animateTitle = "";
    for (var i = 0; i < array.length; i++) {
      const e = array[i];
      animateTitle = animateTitle + e;
      document.title = `${animateTitle} | Hartaithan.`;
      await timer(300);
    }
  }

  async function runAnimation() {
    newTitle = title;
    await deleteAnimation();
    await writeAnimation();
  }

  React.useEffect(() => {
    runAnimation();

    return () => {
      document.title = prevTitle;
    };
  });
};

export default useTitle;
