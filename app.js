document.addEventListener('DOMContentLoaded', function() {
    let currentAnswer = 0;
    
    function generateMathQuestion() {
        const operators = ['+', '-', '×'];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        let num1, num2, question;
        
        if (operator === '+') {
            num1 = Math.floor(Math.random() * 25) + 1;
            num2 = Math.floor(Math.random() * 25) + 1;
            currentAnswer = num1 + num2;
            question = `${num1} + ${num2} =`;
        } else if (operator === '-') {
            num1 = Math.floor(Math.random() * 30) + 15;
            num2 = Math.floor(Math.random() * 15) + 1;
            currentAnswer = num1 - num2;
            question = `${num1} - ${num2} =`;
        } else {
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            currentAnswer = num1 * num2;
            question = `${num1} × ${num2} =`;
        }
        
        document.getElementById('mathQuestion').textContent = question;
        document.getElementById('captchaAnswer').value = '';
        document.getElementById('captchaError').classList.add('hidden');
    }
    
    function validateCaptcha() {
        const userAnswer = parseInt(document.getElementById('captchaAnswer').value);
        return userAnswer === currentAnswer;
    }
    
    document.getElementById('refreshCaptcha').addEventListener('click', generateMathQuestion);
    
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateCaptcha()) {
            document.getElementById('captchaError').classList.remove('hidden');
            document.getElementById('captchaAnswer').classList.add('border-red-300', 'bg-red-50');
            return;
        }
        
        document.getElementById('captchaError').classList.add('hidden');
        document.getElementById('captchaAnswer').classList.remove('border-red-300', 'bg-red-50');
        document.getElementById('successMessage').classList.remove('hidden');
        
        setTimeout(() => {
            document.getElementById('registrationForm').reset();
            document.getElementById('successMessage').classList.add('hidden');
            generateMathQuestion();
        }, 4000);
    });
    
    generateMathQuestion();
});