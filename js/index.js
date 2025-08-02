document.querySelectorAll('.card').forEach(card => {
    const images = card.querySelectorAll('.slider-img');
    let current = 0;

    const showImage = (index) => {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    };

    const prevBtn = card.querySelector('.prev-btn');
    const nextBtn = card.querySelector('.next-btn');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
      });

      nextBtn.addEventListener('click', () => {
        current = (current + 1) % images.length;
        showImage(current);
      });

      // إظهار أول صورة
      showImage(current);
    }
  });

  document.querySelectorAll('.whatsapp-btn').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.card');
      const id = card.dataset.id;
      const phone = card.dataset.phone;
      const title = card.querySelector('.card-title').innerText;
      const desc = card.querySelector('.card-text').innerText;

      const message = `السلام عليكم، أريد الاستفسار عن السكن التالي:\n\n📌 العنوان: ${title}\n📝 التفاصيل: ${desc}\n🆔 كود السكن: ${id}`;
      const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    });
  });

  function applyFilters() {
    const selectedLocation = document.getElementById("filter-location").value;
    const selectedGender = document.getElementById("filter-gender").value;

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const cardLocation = card.getAttribute("data-location");
      const cardGender = card.getAttribute("data-gender");

      const matchesLocation = !selectedLocation || cardLocation === selectedLocation;
      const matchesGender = !selectedGender || cardGender === selectedGender;

      if (matchesLocation && matchesGender) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  }

  function showAll() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.parentElement.style.display = "block";
    });

    document.getElementById("filter-location").value = "";
    document.getElementById("filter-gender").value = "";
  }