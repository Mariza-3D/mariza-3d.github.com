// Utility to detect mobile devices
export const isMobileDevice = (): boolean => {
    if (typeof window === 'undefined') return false;

    return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768 ||
        'ontouchstart' in window
    );
};

// Utility to check if device has touch support
export const hasTouchSupport = (): boolean => {
    if (typeof window === 'undefined') return false;

    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Get optimal 3D quality based on device
export const get3DQuality = (): '3d' | 'low' | 'minimal' => {
    if (!isMobileDevice()) return 'high';

    // Check if it's a powerful mobile device
    const gl = document.createElement('canvas').getContext('webgl');
    if (!gl) return 'minimal';

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) return 'low';

    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    // High-end mobile GPUs
    if (/Mali-G|Adreno 6|Apple A1[4-9]|Apple M/.test(renderer)) {
        return 'high';
    }

    return 'low';
};
