// ##########################          
// JavaScripts
// For: Desktop
// About: Animação para o cursor do mouse
// ##########################           


const mediaQuery = window.matchMedia('(min-width: 768px)');

if (mediaQuery.matches) {
    const dpkCursor = document.createElement("div");
    dpkCursor.classList.add("dpkCursor");
    document.body.appendChild(dpkCursor);

    function initCursor(speedOption = 0.05) {
        let dpkCursorMouse = { x: -100, y: -100 };
        let dpkCursorPos = { x: 0, y: 0 };
        let speed = speedOption;

        dpkCursor.style.width = '50px';
        dpkCursor.style.height = '50px';

        window.addEventListener("mousemove", (e) => {
            dpkCursorMouse.x = e.clientX;
            dpkCursorMouse.y = e.clientY;
        });

        const updatePosition = () => {
            dpkCursorPos.x += (dpkCursorMouse.x - dpkCursorPos.x - dpkCursor.offsetWidth / 2) * speed;
            dpkCursorPos.y += (dpkCursorMouse.y - dpkCursorPos.y - dpkCursor.offsetHeight / 2) * speed;

            dpkCursor.style.transform = `translate(${dpkCursorPos.x}px, ${dpkCursorPos.y}px)`;
        };

        function loop() {
            updatePosition();
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }

    initCursor();
}