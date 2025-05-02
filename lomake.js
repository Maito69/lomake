document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let isValid = true;
  
    // Tyhjennä aiemmat virheilmoitukset
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
  
    // Käyttäjä ID
    const userId = document.getElementById("userId").value;
    if (userId.length < 6) {
      document.getElementById("userIdError").textContent = "Vähintään 6 merkkiä.";
      isValid = false;
    }
  
    // Salasana
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@£$€&%#]).{6,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent = "Salasanan oltava väh. 6 merkkiä, sis. ison kirjaimen, numeron ja erikoismerkin.";
      isValid = false;
    }
  
    // Nimi
    if (document.getElementById("name").value.trim() === "") {
      document.getElementById("nameError").textContent = "Nimi vaaditaan.";
      isValid = false;
    }
  
    // Osoite
    if (document.getElementById("address").value.trim() === "") {
      document.getElementById("addressError").textContent = "Osoite vaaditaan.";
      isValid = false;
    }
  
    // Maa
    if (document.getElementById("country").value === "") {
      document.getElementById("countryError").textContent = "Valitse maa.";
      isValid = false;
    }
  
    // Postinumero
    const postal = document.getElementById("postal").value;
    if (!/^\d{5}$/.test(postal)) {
      document.getElementById("postalError").textContent = "Postinumero tulee olla 5 numeroa.";
      isValid = false;
    }
  
    // Sähköposti
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Virheellinen sähköposti.";
      isValid = false;
    }
  
    // Sukupuoli
    const genderChecked = document.querySelector('input[name="gender"]:checked');
    if (!genderChecked) {
      document.getElementById("genderError").textContent = "Valitse sukupuoli.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Lomake tarkistettu onnistuneesti!");
    }
  });
  