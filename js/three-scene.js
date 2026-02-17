// Three.js Scene - Simplified 3D background without physics

export async function initThreeScene() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Arrays to hold models
    const models = [];
    const modelData = [
        { path: 'public/assets/3d_models/blender.glb', position: [-3, 2, -2], scale: 0.5 },
        { path: 'public/assets/3d_models/after-effects.glb', position: [3, -1, -3], scale: 0.6 },
        { path: 'public/assets/3d_models/photoshop.glb', position: [-2, -2, -1], scale: 0.55 }
    ];

    // Load models (simplified, no error handling for now)
    const loader = new THREE.GLTFLoader();

    try {
        for (const data of modelData) {
            loader.load(
                data.path,
                (gltf) => {
                    const model = gltf.scene;
                    model.position.set(...data.position);
                    model.scale.setScalar(data.scale);
                    scene.add(model);
                    models.push({
                        object: model,
                        initialPos: new THREE.Vector3(...data.position),
                        floatSpeed: 0.5 + Math.random() * 0.5,
                        rotationSpeed: {
                            x: (Math.random() - 0.5) * 0.001,
                            y: (Math.random() - 0.5) * 0.002,
                            z: (Math.random() - 0.5) * 0.001
                        }
                    });
                },
                undefined,
                (error) => {
                    console.warn(`Could not load model: ${data.path}`, error);
                }
            );
        }
    } catch (error) {
        console.warn('Model loading error:', error);
    }

    // Mouse tracking for parallax
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    let frame = 0;
    function animate() {
        requestAnimationFrame(animate);
        frame++;

        // Smooth mouse following
        target.x += (mouse.x - target.x) * 0.05;
        target.y += (mouse.y - target.y) * 0.05;

        // Animate models
        models.forEach((modelObj, index) => {
            const { object, initialPos, floatSpeed, rotationSpeed } = modelObj;
            const time = frame * 0.01;

            // Floating animation
            const yOffset = Math.sin(time * floatSpeed) * 0.3;
            const xOffset = Math.sin(time * floatSpeed * 0.6 + index * 2) * 0.15;

            object.position.x = initialPos.x + xOffset + target.x * 0.2;
            object.position.y = initialPos.y + yOffset + target.y * 0.15;

            // Gentle rotation
            object.rotation.x += rotationSpeed.x;
            object.rotation.y += rotationSpeed.y;
            object.rotation.z += rotationSpeed.z;
        });

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return Promise.resolve();
}
