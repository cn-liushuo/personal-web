import type { ImageRenderToolbarProps } from "naive-ui";

/** 预览工具栏：保留缩放/旋转/关闭，不包含下载 */
export function lsImagePreviewToolbar({ nodes }: ImageRenderToolbarProps) {
  return [
    nodes.rotateCounterclockwise,
    nodes.rotateClockwise,
    nodes.resizeToOriginalSize,
    nodes.zoomOut,
    nodes.zoomIn,
    nodes.close
  ];
}
