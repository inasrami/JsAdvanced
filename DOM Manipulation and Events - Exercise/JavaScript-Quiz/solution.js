function solve() {
  const sections = document.querySelectorAll('section');
  const resultUl = document.getElementById('results');
  const resultH1 = resultUl.querySelector('h1');
  
  let currentSection = 0;
  let correctAnswers = 0;
  
  const correctAnswersText = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];
  
  const answers = document.querySelectorAll('.quiz-answer');
  
  answers.forEach(answer => {
    answer.addEventListener('click', function() {
      const answerText = this.querySelector('.answer-text').textContent;
      
      if (correctAnswersText.includes(answerText)) {
        correctAnswers++;
      }
      
      sections[currentSection].style.display = 'none';
      currentSection++;
      
      if (currentSection < sections.length) {
        sections[currentSection].style.display = 'block';
      } else {
        resultUl.style.display = 'block';
        
        if (correctAnswers === 3) {
          resultH1.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          resultH1.textContent = `You have ${correctAnswers} right answers`;
        }
      }
    });
  });
}