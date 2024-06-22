onload = () => {
    const c = setTimeout(() => {
      document.getElementById('flowersContent').classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };