import React from 'react'
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer'
import styles from './DialogueEditor.module.scss'

const initial /*: ReadonlyArray<>*/ = [
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
  const [elements, setElements] = React.useState(initial)
  const onRightClick = React.useCallback((e: React.MouseEvent) => {
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
                  setElements(e => {
                    const copy = e.slice()
                    const thisElem = copy.find(elem => elem.id === newId)
                    //thisElem.label =
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
  })
  return (
    <div className={styles.page} onContextMenu={onRightClick}>
      <div className={styles.toolbar}>
        <button>Save</button>
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
