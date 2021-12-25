/** options for downloading a file that is created locally with some given string content */
interface DownloadFileOptsLocal {
  fileName?: string
  appendEstimatedFileExtension?: boolean
  content: string
}

type DownloadFileOpts = DownloadFileOptsLocal

const makeDataUrl = (
  data: string,
  type: string = 'text/plain',
  charset: string = 'utf-8'
) => {
  return `data:${type};charset=${charset},${encodeURI(data)}`
}

const mimetypeToExtensionMap: { [k: string]: string } = {
  'text/csv': 'csv',
  'application/zip': 'zip',
}

export const downloadFile = async (opts: DownloadFileOpts) => {
  const a = document.createElement('a')
  a.style.display = 'none'
  let contentType: string | undefined
  a.href = makeDataUrl(opts.content)
  if (opts.fileName) a.download = opts.fileName
  if (opts.appendEstimatedFileExtension && contentType) {
    a.download = `${a.download}.${mimetypeToExtensionMap[contentType] || 'txt'}`
  }
  document.body.append(a)
  a.click()
  a.remove()
}

export default downloadFile
