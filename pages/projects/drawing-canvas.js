import {useEffect, useRef, useState} from "react";
import styles from "../../styles/drawing-canvas.module.css";

export default function DrawingCanvas() {
    const canvas = useRef();
    const [canvasSize, setCanvasSize] = useState({
        width: 800,
        height: 800,
    });
    
    let ctx;
    let isDrawing = false;
    let hue = 0;
    let points = [];
    
    const updateHue = () => {
        if (hue >= 360) {
            hue = 0;
        } else {
            hue += 1;
        }
    };
    
    const startDraw = (e) => {
        points = [];
        isDrawing = true;
        points.push({x: e.clientX, y: e.clientY});
    };
    const endDraw = () => {
        isDrawing = false;
        points.length = 0;
    };
    const draw = (e) => {
        if (!isDrawing) return;
        
        if (e._reactName === 'onTouchMove') {
            points.push({x: e.touches[0].clientX, y: e.touches[0].clientY})
        } else {
            points.push({x: e.clientX, y: e.clientY});
        }
        
        ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.25)`;
        ctx.beginPath();
        ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        ctx.stroke();
        
        for (let i = 0, len = points.length; i < len; i++) {
            let dx = points[i].x - points[points.length-1].x;
            let dy = points[i].y - points[points.length-1].y;
            let d = dx * dx + dy * dy;
            
            if (d < 20000 && Math.random() > 0.5) {
                ctx.beginPath();
                ctx.moveTo( points[points.length-1].x + (dx * 0.2), points[points.length-1].y + (dy * 0.2));
                ctx.lineTo( points[i].x - (dx * 0.2), points[i].y - (dy * 0.2));
                ctx.stroke();
            }
        }
        updateHue();
    }
    
    useEffect(() => {
        setCanvasSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, [])
    useEffect(() => {
        canvas.current.width = canvasSize.width;
        canvas.current.height = canvasSize.height;
        
        ctx = canvas.current.getContext('2d');
        ctx.lineWidth = 1;
        ctx.lineJoin = ctx.lineCap = 'round';
    }, [canvasSize])
    
    return (
        <>
            <section className={styles.container}>
                <canvas ref={canvas}
                        onMouseMove={draw}
                        onMouseDown={startDraw}
                        onMouseUp={endDraw}
                        onTouchStart={startDraw}
                        onTouchMove={draw}
                        onTouchEnd={endDraw}
                        width={canvasSize.width}
                        height={canvasSize.height}>
                </canvas>
            </section>
        </>
    )
}