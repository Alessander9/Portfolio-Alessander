/**
 * Cloudinary Media Optimizer Utility
 * Automatically transforms URLs to deliver next-gen video formats,
 * optimized compression, and instant static poster frames.
 */

export function getOptimizedVideoUrl(url, width = 720) {
  if (!url || typeof url !== 'string' || !url.includes('cloudinary.com')) {
    return url
  }
  // Avoid duplicate injection
  if (url.includes('/upload/f_auto') || url.includes('/upload/q_auto')) {
    return url
  }
  return url.replace('/upload/', `/upload/f_auto,q_auto:good,w_${width},vc_auto/`)
}

export function getCloudinaryPosterUrl(url, width = 600) {
  if (!url || typeof url !== 'string' || !url.includes('cloudinary.com')) {
    return ''
  }
  const cleanUrl = url.replace(/\/upload\/[^/]+\//, '/upload/')
  const base = cleanUrl.replace('/upload/', `/upload/so_0,f_auto,q_auto,w_${width}/`)
  return base.replace(/\.(mp4|mov|webm)$/i, '.jpg')
}
