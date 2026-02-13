function startSurprise() {
    document.getElementById('On-trap').style.display = 'none';

    const body = document.body;
    const gift = document.getElementById('gift-box');
    const text = document.getElementById('valentine-text');
    const gifContainer = document.getElementById('gif-container');

    // 1. เปลี่ยนพื้นหลังและซ่อนกล่องของขวัญ
    body.style.backgroundColor = "white";
    gift.style.display = "none";

    // 2. สร้างหัวใจกระจายรอบจุดที่คลิก
    for (let i = 0; i < 40; i++) {
        createHeart();
    }

    // 3. แสดงข้อความและเลื่อนขึ้น
    text.style.display = "block";
    text.style.animation = "moveUp 2s forwards";

    // 4. หลังจากข้อความเลื่อนเสร็จ (2 วินาที) ให้ย่อขนาดลง
    setTimeout(() => {
        text.style.fontSize = "1.8rem"; // ขนาดที่ย่อลง
        text.style.marginTop = "-5rem"; // ขยับขึ้นไปอีกนิดเพื่อเพิ่มที่ให้ GIF
    }, 2500);

    // 5. แสดง GIF หลังจากย่อข้อความเสร็จ
    setTimeout(() => {
        gifContainer.style.display = "block";
        setTimeout(() => {
            gifContainer.style.opacity = "1";
        }, 100);
    }, 3500);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = "❤️";
    
    // คำนวณระยะกระจายตามขนาดหน้าจอ (หน่วย rem เพื่อความคงที่)
    const angle = Math.random() * Math.PI * 2;
    const velocity = window.innerWidth < 500 ? 15 : 25; 
    const x = Math.cos(angle) * (Math.random() * velocity) + "rem";
    const y = Math.sin(angle) * (Math.random() * velocity) + "rem";
    
    heart.style.setProperty('--x', x);
    heart.style.setProperty('--y', y);
    heart.style.left = "50%";
    heart.style.top = "50%";

    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 2500);
}