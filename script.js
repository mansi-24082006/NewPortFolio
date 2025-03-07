const typingAnimationElement = document.getElementById('typing-animation');
						const typingTexts = [
						'HTML ',
						'CSS  ',
						'JAVASCRIPT  ',
                        'REACTJS....'
						];
						function playTypingAnimation(text) {
						for (let i = 0; i < text.length; i++) {
							setTimeout(() => {
							typingAnimationElement.textContent += text[i];
							}, i * 200); 
						}
						setTimeout(() => {
							typingAnimationElement.textContent = '';
							playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
						}, text.length * 200);
						}
						playTypingAnimation(typingTexts[0]);