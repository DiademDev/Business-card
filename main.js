const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {

    const start = async () => {

    const mindarthree = new window.MINDAR.IMAGE.MindARThree ({
        container: document.body,
        imageTargetSrc: '../assets/Bus-card.mind'
    });

    const {renderer, scene, camera} = mindarThree;

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const cube = new THREE.Mesh(goemetry, material);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(cube);

    await mindarThree. start();

    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
    }
    start();
});