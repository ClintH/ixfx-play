export const resample = (destinationContext, options) => {
    const dpiScaling = window.devicePixelRatio || 1; //options.scale ?? 1;
    console.log(`dpiScaling: ${dpiScaling}`);
    const destinationCanvas = destinationContext.canvas;
    const dimension = Math.min(destinationCanvas.width, destinationCanvas.height);
    const smoothingEnabled = options.smoothingEnabled ?? true;
    const smoothingQuality = options.smoothingQuality ?? `high`;
    const bg = options.bg ?? `transparent`;
    // This will be the retina-sized pixels (eg doubled)
    const destinationPhysicalSize = {
        width: destinationCanvas.width,
        height: destinationCanvas.height
    };
    // This will be the logical size size
    const destinationLogicalSize = {
        width: destinationPhysicalSize.width / dpiScaling,
        height: destinationPhysicalSize.height / dpiScaling
    };
    const offscreenSize = {
        width: destinationLogicalSize.width * 2,
        height: destinationLogicalSize.height * 2
    };
    console.log(`dest phys: ${destinationPhysicalSize.width}x${destinationPhysicalSize.height} dest logical: ${destinationLogicalSize.width}x${destinationLogicalSize.height}`);
    const offCanvas = new OffscreenCanvas(offscreenSize.width, offscreenSize.height);
    const offContext = offCanvas.getContext(`2d`);
    //offContext?.scale(dpiScaling, dpiScaling);
    offContext?.scale(1 / dpiScaling, 1 / dpiScaling);
    const drawBox = (context, size) => {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(size.width, 0);
        context.moveTo(size.width, 0);
        context.lineTo(0, size.height);
        context.moveTo(0, 0);
        context.lineTo(size.width, size.height);
        context.lineWidth = 5;
        context.stroke();
    };
    const run = (rotationRadians) => {
        if (offContext) {
            offContext.imageSmoothingEnabled = smoothingEnabled;
            offContext.imageSmoothingQuality = smoothingQuality;
            //offContext.fillStyle = `pink`;
            //offContext.fillRect(0, 0, offscreenSize.width, offscreenSize.height);
            destinationContext.fillStyle = `blue`;
            destinationContext.fillText(`DESTINATION`, destinationCanvas.width / 2, destinationCanvas.height / 2);
            //offContext.scale(1 / dpiScaling, 1 / dpiScaling);
            // destinationContext.fillStyle = `green`;
            // destinationContext.fillRect(0, 0, destinationPhysicalSize.width, destinationPhysicalSize.height);
            // Draw current state into an offscreen canvas
            offContext.drawImage(destinationCanvas, -destinationPhysicalSize.width / 2, -destinationPhysicalSize.height / 2);
            // offContext.fillStyle = `yellow`;
            // offContext.fillRect(0, 0, offscreenSize.width, offscreenSize.height);
            // offContext.strokeStyle = `yellow`;
            // drawBox(offContext, offscreenSize);
            offContext.fillStyle = `blue`;
            offContext.textBaseline = `middle`;
            offContext.fillText(`OFF CONTEXT`, offscreenSize.width / 2, offscreenSize.height / 2);
        }
        // destinationContext.fillStyle = `red`;
        // destinationContext.fillText(`HELLO`, 800, 800);
        // if (bg === `transparent`) {
        //   destinationContext.clearRect(0, 0, destinationLogicalSize.width, destinationLogicalSize.height);
        // } else {
        //   destinationContext.fillStyle = options.bg ?? `green`;
        //   destinationContext.fillRect(0, 0, destinationLogicalSize.width, destinationLogicalSize.height);
        // }
        destinationContext.clearRect(0, 0, destinationPhysicalSize.width, destinationPhysicalSize.height);
        destinationContext.save();
        //destinationContext.scale(1 / dpiScaling, 1 / dpiScaling);
        //destinationContext.imageSmoothingEnabled = smoothingEnabled;
        //destinationContext.imageSmoothingQuality = smoothingQuality;
        destinationContext.translate(destinationLogicalSize.width / 2, destinationLogicalSize.height / 2);
        //destinationContext.rotate(rotationRadians);
        destinationContext.translate(-destinationLogicalSize.width / 2, -destinationLogicalSize.height / 2);
        // Draw snapshot back on to destination, now that it is rotated
        destinationContext.drawImage(offCanvas, 0, 0); //-dimension, -dimension);
        destinationContext.restore();
        return destinationContext;
    };
    return { run };
};
//# sourceMappingURL=resample.js.map