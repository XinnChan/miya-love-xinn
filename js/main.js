window.onload = () => {
  const audio = new Audio("mimi.mp3");
  audio.play();
  
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'I LOVE U'.split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      } else {
        // Setelah tulisan "I LOVE U" selesai, tambahkan tulisan tambahan
        const subtitleElement = document.createElement('div');
        subtitleElement.innerHTML = 'Miya Ku Tercinta <span class="emoji">😘</span>';
        titleElement.appendChild(subtitleElement);
      }
    }

    appendTitle();
  }, 1000);
};
