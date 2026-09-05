import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const loading = document.getElementById('viewer-loading');
const errorBox = document.getElementById('viewer-error');

async function initViewer() {
  try {
    const viewer = new IfcViewerAPI({
      container,
      backgroundColor: new Color(0x101214),
    });

    // WASM remoto: evita tener que copiar manualmente los binarios de web-ifc.
    await viewer.IFC.setWasmPath('https://unpkg.com/web-ifc@0.0.68/');
    viewer.axes.setAxes();
    viewer.grid.setGrid();

    const model = await viewer.IFC.loadIfcUrl('/models/nave-1141.ifc');
    viewer.shadowDropper.renderShadow(model.modelID);
    viewer.IFC.selector.prePickIfcItem();

    window.addEventListener('dblclick', () => viewer.IFC.selector.pickIfcItem(true));
    window.addEventListener('mousemove', () => viewer.IFC.selector.prePickIfcItem());

    loading?.remove();
  } catch (error) {
    console.error(error);
    if (loading) loading.textContent = 'No se pudo cargar el modelo.';
    if (errorBox) {
      errorBox.hidden = false;
      errorBox.textContent = 'Error cargando el IFC. Revisá la consola del navegador y que el sitio esté servido por HTTP/HTTPS (no file://).';
    }
  }
}

initViewer();
