import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.loader_container}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      width='296'
      height='296'
      style={{ shapeRendering: 'auto', display: 'block', background: 'transparent' }}
    >
      <g>
        <circle
          strokeDasharray='98.96016858807849 34.98672286269283'
          r='21'
          strokeWidth='5'
          stroke='#f4511e'
          fill='none'
          cy='50'
          cx='50'
        >
          <animateTransform
            keyTimes='0;1'
            values='0 50 50;360 50 50'
            dur='0.8s'
            repeatCount='indefinite'
            type='rotate'
            attributeName='transform'
          />
        </circle>
        <g />
      </g>
    </svg>
  </div>
);
