document.addEventListener("DOMContentLoaded", () => {
  const heartCount = document.getElementById("heartCount");
  const copyCountEl = document.getElementById("copyCount");
  const coinCount = document.getElementById("coinCount");
  const callHistory = document.getElementById("callHistory");
  const clearHistory = document.getElementById("clearHistory");

  let hearts = 0;
  let copies = 0;
  let coins = 100;

  //  Heart Toggle
  document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const liked = btn.dataset.liked === "true";

      if (liked) {
        btn.textContent = "🤍";
        btn.classList.remove("text-red-500");
        hearts = Math.max(0, hearts - 1);
        btn.dataset.liked = "false";
      } else {
        btn.textContent = "❤️";
        btn.classList.add("text-red-500");
        hearts++;
        btn.dataset.liked = "true";
      }
      heartCount.textContent = hearts;
    });
  });

 
});