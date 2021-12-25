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

/** prompt the user to upload a file, currenlty only supports text */
export const uploadFile = async () => {
  return new Promise<string>((resolve, reject) => {
    // should probably just keep this available at all times
    const hiddenTree = document.createElement('div')
    hiddenTree.style.display = 'none'
    hiddenTree.innerHTML = `<input type="file" id="temp-upload" />`
    const input = hiddenTree.children[0] as HTMLInputElement
    input.onchange = function() {
      try {
        const [file] = input.files
        const blob = file
        const reader = new FileReader()
        reader.onloadend = function(ev) {
          if (ev.target.readyState === FileReader.DONE) {
            resolve(ev.target.result as string)
          }
        }
        reader.readAsText(blob, 'utf8')
      } catch (err) {
        reject(err)
      }
    }
    input.click()
  })
}

export default downloadFile
