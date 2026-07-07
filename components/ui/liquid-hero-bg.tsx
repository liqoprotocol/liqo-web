// components/ui/liquid-hero-bg.tsx
"use client";
import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
    vUv = aPos * 0.5 + 0.5;
    gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;
uniform sampler2D uTex;
uniform float uTime;
varying vec2 vUv;

void main() {
    vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
    float t = uTime * 0.25;

    // two octaves of domain warp = the "liquid" motion
    vec2 warp = vec2(
        sin(uv.y * 4.0 + t) + 0.5 * sin(uv.y * 9.0 - t * 1.6),
        cos(uv.x * 5.0 - t) + 0.5 * cos(uv.x * 11.0 + t * 1.3)
    );
    // warp the warp — this second pass is what makes it feel fluid, not wobbly
    warp += 0.6 * vec2(
        sin((uv.y + warp.x * 0.05) * 7.0 - t * 1.2),
        cos((uv.x + warp.y * 0.05) * 6.0 + t * 0.9)
    );

    vec2 offset = warp * 0.012;

    // subtle chromatic split along the flow direction
    float r = texture2D(uTex, uv + offset * 1.15).r;
    vec4 g = texture2D(uTex, uv + offset);
    float b = texture2D(uTex, uv + offset * 0.85).b;

    gl_FragColor = vec4(r, g.g, b, g.a);
}`;

const LiquidHeroBg = ({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, antialias: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // fullscreen quad
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");

    // SVG → texture
    const tex = gl.createTexture();
    const img = new window.Image();
    img.src = src;
    let ready = false;
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      ready = true;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5); // cap: it's a bg, retina res is wasted
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    const start = performance.now();
    const frame = () => {
      if (ready && visible) {
        gl.uniform1f(uTime, (performance.now() - start) / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        if (reduced) return; // draw one static frame, stop
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [src]);

  return (
    <canvas ref={canvasRef} className={`pointer-events-none ${className}`} />
  );
};

export default LiquidHeroBg;
