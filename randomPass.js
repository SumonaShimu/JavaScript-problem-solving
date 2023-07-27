//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function randomPassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let pass = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charset.length);
      pass += charset[index];
    }
    return pass;
  }
  
  const length = 8;
  console.log(randomPassword(length));
  