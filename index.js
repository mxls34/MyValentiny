function startSurprise() {
    document.getElementById('On-trap').style.display = 'none';
    
    const gift = document.getElementById('gift-box');
    const text = document.getElementById('valentine-text');
    const gif = document.getElementById('celebration-gif');
    const body = document.body;

    // 1. Create 40 floating hearts around the center
    for (let i = 0; i < 40; i++) {
        createHeart();
    }

    // 2. Turn background to white
    body.style.backgroundColor = "white";

    // 3. Hide the gift box immediately
    gift.classList.add('hidden');

    // 4. Show the text and trigger the upward animation
    text.style.display = "block";
    setTimeout(() => {
        text.style.animation = "moveUp 2.5s forwards";
    }, 100);

    // 5. Reveal the GIF after the text has moved significantly
    setTimeout(() => {
        gif.style.display = "inline-block";
    }, 1800);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = "❤️";
    
    // Calculate random burst directions
    const angle = Math.random() * Math.PI * 2;
    const distance = 200 + Math.random() * 300;
    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";
    
    heart.style.setProperty('--x', x);
    heart.style.setProperty('--y', y);
    
    // Start from center
    heart.style.left = "50%";
    heart.style.top = "50%";

    document.body.appendChild(heart);

    // Clean up memory
    setTimeout(() => {
        heart.remove();
    }, 2500);
}