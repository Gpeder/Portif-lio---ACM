import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const environments = [
  {
    name: "Quarto Vitor",
    color: 0xc8a97e,
    wallColor: 0xf0e8dc,
    floorColor: 0x8b7355,
    width: 5,
    depth: 4,
    height: 2.8,
    description: "Ambiente residencial — tons quentes e naturais",
  },
  {
    name: "Sala Natalina",
    color: 0x9e7b5a,
    wallColor: 0xfaf0e6,
    floorColor: 0x6b5b45,
    width: 7,
    depth: 5,
    height: 3.2,
    description: "Sala de estar ampla — pé-direito elevado",
  },
  {
    name: "Quarto Boho",
    color: 0xb8956a,
    wallColor: 0xede0d0,
    floorColor: 0x7a6248,
    width: 4,
    depth: 3.5,
    height: 2.6,
    description: "Estilo boho — texturas e materiais naturais",
  },
];

export function Viewer3D() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeEnv, setActiveEnv] = useState(0);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    animId: number;
    room: THREE.Group;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const width = canvasRef.current.clientWidth;
    const height = 480;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d0d0d);
    scene.fog = new THREE.Fog(0x0d0d0d, 18, 35);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(8, 5, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xfff8f0, 0.5);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xfff4e0, 1.2);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(1024, 1024);
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 50;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xc8a97e, 0.8, 15);
    pointLight.position.set(-2, 2, -2);
    scene.add(pointLight);

    const room = new THREE.Group();
    scene.add(room);

    let angle = 0;
    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      angle += 0.003;
      camera.position.x = Math.cos(angle) * 10;
      camera.position.z = Math.sin(angle) * 10;
      camera.lookAt(0, 0.5, 0);
      renderer.render(scene, camera);
    };
    animate();

    sceneRef.current = { scene, camera, renderer, animId, room };

    const handleResize = () => {
      if (!canvasRef.current) return;
      const w = canvasRef.current.clientWidth;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      canvasRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;
    const { room } = sceneRef.current;
    const env = environments[activeEnv];

    while (room.children.length > 0) room.remove(room.children[0]);

    const { width: w, depth: d, height: h } = env;
    const hw = w / 2;
    const hd = d / 2;

    const matFloor = new THREE.MeshLambertMaterial({ color: env.floorColor });
    const matWall = new THREE.MeshLambertMaterial({
      color: env.wallColor,
      side: THREE.FrontSide,
    });
    const matAccent = new THREE.MeshLambertMaterial({ color: env.color });

    const floor = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, d), matFloor);
    floor.position.set(0, -0.04, 0);
    floor.receiveShadow = true;
    room.add(floor);

    const backWall = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.08), matWall);
    backWall.position.set(0, h / 2, -hd);
    backWall.receiveShadow = true;
    room.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.08, h, d), matWall);
    leftWall.position.set(-hw, h / 2, 0);
    leftWall.receiveShadow = true;
    room.add(leftWall);

    const ceilGeo = new THREE.BoxGeometry(w, 0.04, d);
    const ceilMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      opacity: 0.08,
      transparent: true,
    });
    const ceil = new THREE.Mesh(ceilGeo, ceilMat);
    ceil.position.set(0, h, 0);
    room.add(ceil);

    const bed = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.5, 0.4, d * 0.35),
      new THREE.MeshLambertMaterial({ color: env.color })
    );
    bed.position.set(-hw * 0.4, 0.2, -hd * 0.5);
    bed.castShadow = true;
    room.add(bed);

    const table = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.12, 0.5, d * 0.12),
      matAccent
    );
    table.position.set(hw * 0.5, 0.25, hd * 0.3);
    table.castShadow = true;
    room.add(table);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(w, 0.06, 0.04),
      new THREE.MeshLambertMaterial({ color: 0xc8a97e })
    );
    base.position.set(0, 0.03, -hd + 0.06);
    room.add(base);

    const gridHelper = new THREE.GridHelper(Math.max(w, d), Math.max(w, d) * 2, 0xc8a97e, 0x3a3a38);
    gridHelper.position.set(0, 0.001, 0);
    (gridHelper.material as THREE.Material).opacity = 0.15;
    (gridHelper.material as THREE.Material).transparent = true;
    room.add(gridHelper);
  }, [activeEnv]);

  return (
    <section id="viewer3d" className="bg-dark-bg py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div data-section className="mb-12">
          <p
            data-reveal
            className="font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] mb-3"
          >
            Interativo
          </p>
          <h2
            data-reveal
            className="font-heading font-light text-[clamp(32px,3.5vw,48px)] text-cream tracking-[0.04em] mb-4"
          >
            Visualização 3D
          </h2>
          <p
            data-reveal
            className="font-body font-light text-[14px] text-cream-soft/50 tracking-[0.04em]"
          >
            Explore a modelagem tridimensional dos projetos
          </p>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {environments.map((env, i) => (
            <button
              key={env.name}
              onClick={() => setActiveEnv(i)}
              className={`font-body font-light text-[11px] tracking-[0.16em] uppercase py-[10px] px-6 border-[0.5px] border-solid cursor-pointer transition-all duration-300 ${
                activeEnv === i
                  ? "border-gold bg-[rgba(200,169,126,0.12)] text-gold"
                  : "border-[rgba(232,226,217,0.2)] bg-transparent text-cream-soft/50"
              }`}
            >
              {env.name}
            </button>
          ))}
        </div>

        <div
          ref={canvasRef}
          className="w-full h-[480px] border-[0.5px] border-solid border-[rgba(232,226,217,0.15)] overflow-hidden relative"
        />

        <div className="mt-5 flex justify-between items-center flex-wrap gap-3">
          <p className="font-body font-light text-[13px] text-cream-soft/45 italic">
            {environments[activeEnv].description}
          </p>
          <span className="font-dm-mono text-[10px] text-[#6B5B45] tracking-[0.1em]">
            THREE.JS · ORBIT AUTOMÁTICO
          </span>
        </div>
      </div>
    </section>
  );
}
