export default function ExactCube() {
  return (
    <div className="xcube-wrapper">
      <div className="xcube-container">
        {/* cube 1 */}
        <div className="cube">
          <div style={{ ['--x' as any]: -1, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
          <div style={{ ['--x' as any]: 0, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
          <div style={{ ['--x' as any]: 1, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
        </div>
        {/* cube 2 */}
        <div className="cube">
          <div style={{ ['--x' as any]: -1, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
          <div style={{ ['--x' as any]: 0, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
          <div style={{ ['--x' as any]: 1, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
        </div>
        {/* cube 3 */}
        <div className="cube">
          <div style={{ ['--x' as any]: -1, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
          <div style={{ ['--x' as any]: 0, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
          <div style={{ ['--x' as any]: 1, ['--y' as any]: 0 } as any}>
            <span style={{ ['--i' as any]: 3 } as any}></span>
            <span style={{ ['--i' as any]: 2 } as any}></span>
            <span style={{ ['--i' as any]: 1 } as any}></span>
          </div>
        </div>
      </div>
    </div>
  );
}


