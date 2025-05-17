let score = 0;
const gameArea = document.getElementById('game-area');
const scoreElement = document.getElementById('score');

// ボールを生成する関数
function createBall() {
    const ball = document.createElement('div');
    ball.className = 'ball';
    
    // ランダムな位置に配置
    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;
    ball.style.left = Math.random() * maxX + 'px';
    ball.style.top = Math.random() * maxY + 'px';
    
    // クリックイベントの追加
    ball.addEventListener('click', () => {
        score += 1;
        scoreElement.textContent = score;
        ball.remove();
    });
    
    gameArea.appendChild(ball);
    
    // 3秒後にボールを消す
    setTimeout(() => {
        if (ball.parentNode === gameArea) {
            ball.remove();
        }
    }, 3000);
}

// 定期的にボールを生成
setInterval(createBall, 1000);

// 最初のボールを生成
createBall(); 