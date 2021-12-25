import React from 'react'
import ReactFlow, {
  removeElements,
  addEdge,
  Elements,
} from 'react-flow-renderer'
import styles from './DialogueEditor.module.scss'
import downloadFile from '../utils/downloadFile'

interface NodeData {
  // this comes from react flow itself
  label: React.ReactNode
}

const initial: Elements<NodeData> = [
  {
    id: 'entry',
    type: 'input',
    data: {
      label: 'entry',
    },
    position: { x: 540, y: 100 },
  },
]

const DialogueEditor = () => {
  const [elements, setElements] = React.useState<Elements<NodeData>>(initial)
  const onRightClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      const newId = `${Math.round(Math.random() * Number.MAX_SAFE_INTEGER)}`
      setElements(prev =>
        prev.concat({
          id: newId,
          //type: 'input',
          data: {
            label: (
              <span>
                <textarea
                  onChange={e => {
                    setElements(elems => {
                      const copy = elems.slice()
                      const elemIndex = copy.findIndex(
                        elem => elem.id === newId
                      )
                      const elem = elems[elemIndex]
                      elems[elemIndex] = {
                        ...elem,
                        label: e.currentTarget.value,
                      }
                      return copy
                    })
                  }}
                />
                <button
                  onClick={() =>
                    setElements(prev => prev.filter(elem => elem.id !== newId))
                  }
                >
                  DELETE
                </button>
              </span>
            ),
          },
          position: { x: e.clientX, y: e.clientY },
        })
      )
    },
    [setElements]
  )
  return (
    <div className={styles.page} onContextMenu={onRightClick}>
      <div className={styles.toolbar}>
        <button
          onClick={() => {
            downloadFile({
              fileName: 'blah.json',
              content: JSON.stringify(elements),
            })
          }}
        >
          Save
        </button>
        <button>Load</button>
      </div>
      <div className={styles.graph}>
        <ReactFlow
          elements={elements}
          onConnect={params => setElements(e => addEdge(params, e))}
          deleteKeyCode={46} /*DELETE key*/
          snapToGrid
          snapGrid={[15, 15]}
        />
      </div>
    </div>
  )
}

export default DialogueEditor
