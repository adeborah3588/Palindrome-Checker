function checkPalindrome() {
    var userInput = document.getElementById('inputField').value.toLowerCase();
    
    // Check if the input contains special characters
    if (/[^a-z0-9]/.test(userInput)) {
        document.getElementById('specialCharMessage').innerText = 'Please remove special characters and try again.';
        return; // Exit the function early if special characters are found
    }
    
    // Remove non-alphanumeric characters using regular expression
    var processedInput = userInput.replace(/[^a-z0-9]/g, '');
    var reversedInput = processedInput.split('').reverse().join('');

    if (processedInput === reversedInput) {
        document.getElementById('result').innerText = 'Yes, it\'s a palindrome!';
    } else {
        document.getElementById('result').innerText = 'No, it\'s not a palindrome.';
    }

    // Clear the special character message if no special characters are found
    document.getElementById('specialCharMessage').innerText = '';
}
