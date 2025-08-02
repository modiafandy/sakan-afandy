document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbw4vrkB7HxikE08gy7yGYzo0VodzX_li38OYxA79lO_Ctmu1SzUggmb1uWePZp0N4sd/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
      });
  
      const result = await response.json();
      if (result.success) {
        alert("✅ تم تسجيل الدخول وحفظ البيانات");
        window.location.href = "index.html";
      } else {
        alert("❌ فشل في حفظ البيانات");
      }
    } catch (err) {
      alert("❌ حدث خطأ أثناء الاتصال بالسيرفر");
      console.error(err);
    }
  });
  