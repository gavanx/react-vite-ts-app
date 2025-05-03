import { Modal } from 'antd'
import { Canvas, FabricImage, FabricText } from 'fabric'
import { useEffect, useRef } from 'react'

export default ({ canvasElement }: { canvasElement: HTMLCanvasElement | null }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (canvasElement) {
      const canvas = new Canvas(canvasRef.current!, {
        // backgroundImage: new FabricImage(canvasElement),
        backgroundColor: '#ccc',
      })
      canvas.add(new FabricImage(canvasElement, { width: 200, height: 200 }))
      canvas.add(new FabricText('Hello world!'))
      canvas.renderAll()
    }
  }, [canvasElement])
  return (
    <Modal open>
      <canvas style={{ width: 500, height: 400 }} ref={canvasRef}></canvas>
    </Modal>
  )
}
