type IconProps = { className?: string };

function BrandIcon({ path, className }: IconProps & { path: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
            <path d={path} />
        </svg>
    );
}

export function FigmaIcon({ className }: IconProps) {
    return (
        <BrandIcon
            className={className}
            path="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981h-3.117z"
        />
    );
}

export function FramerIcon({ className }: IconProps) {
    return <BrandIcon className={className} path="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />;
}

function AdobeLettermarkIcon({ label, className }: IconProps & { label: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
            <rect x="2" y="2" width="20" height="20" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
            <text
                x="12"
                y="15.5"
                textAnchor="middle"
                fill="currentColor"
                fontSize={label.length > 2 ? '6' : '7.5'}
                fontWeight="700"
                fontFamily="system-ui, -apple-system, sans-serif"
            >
                {label}
            </text>
        </svg>
    );
}

export function PhotoshopIcon({ className }: IconProps) {
    return <AdobeLettermarkIcon className={className} label="Ps" />;
}

export function IllustratorIcon({ className }: IconProps) {
    return <AdobeLettermarkIcon className={className} label="Ai" />;
}

export function AnimateIcon({ className }: IconProps) {
    return <AdobeLettermarkIcon className={className} label="An" />;
}

export function AdobeXDIcon({ className }: IconProps) {
    return <AdobeLettermarkIcon className={className} label="Xd" />;
}

export function PencilPaperIcon({ className }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className={className}
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M16.5 12.5 19 15l-6.5 6.5-2.5.5.5-2.5z" />
            <path d="m15 14 2 2" />
        </svg>
    );
}
