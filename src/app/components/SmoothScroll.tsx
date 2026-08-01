import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        // @ts-expect-error - Expose lenis globally for ScrollToTop
        window.lenis = lenis;

        return () => {
            lenis.destroy();
            // @ts-expect-error - No type definitions available for lenis on window
            delete window.lenis;
        };
    }, []);

    return null;
}
