import React from 'react'
import ReactFlow, {
  addEdge,
  Elements,
  Handle,
  NodeProps,
  Node,
  removeElements,
  Controls,
  MiniMap,
} from 'react-flow-renderer'
import styles from './DialogueEditor.module.scss'
import { downloadFile, uploadFile } from '../utils/localFileManip'

interface DialogueEntry {
  portrait?: string
  title: string
  text: string
}

interface DialogueEntryNodeData extends DialogueEntry {
  /** shallow merges in a patch to the data for that entry */
  onChange(newData: Partial<DialogueEntry>): void
  onDelete(): void
}

const initial: Elements<{} | DialogueEntryNodeData> = [
  {
    id: '1',
    type: 'input',
    data: {
      label: 'entry',
    },
    position: { x: 540, y: 100 },
  },
]

const DialogueEntryNode = (props: NodeProps<DialogueEntryNodeData>) => {
  return (
    <div className={styles.dialogueEntryNode}>
      <Handle type="target" position="top" isConnectable />
      <div>non-label test</div>
      <input
        className="nodrag"
        onChange={e => {
          props.data.onChange({ ...props.data, text: e.currentTarget.value })
        }}
        defaultValue={props.data.text}
      />
      <button onClick={props.data.onDelete} className={styles.deleteButton}>
        &times;
      </button>
      {/* will dynamically add handles potentially... */}
      <Handle type="source" position="bottom" isConnectable />
    </div>
  )
}

enum nodeTypeNames {
  dialogueEntry = 'dialogueEntry',
}

const nodeTypes = {
  [nodeTypeNames.dialogueEntry]: DialogueEntryNode,
} as const

const DialogueEditor = () => {
  const [elements, setElements] = React.useState(initial)
  const onRightClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      const newId = `${Math.round(Math.random() * Number.MAX_SAFE_INTEGER)}`
      setElements(prev =>
        prev.concat({
          id: newId,
          type: nodeTypeNames.dialogueEntry,
          data: {
            title: 'test title',
            text: 'test text',
            onChange: (newVal: Partial<DialogueEntryNodeData>) =>
              setElements(prev => {
                const copy = prev.slice()
                const index = copy.findIndex(elem => elem.id === newId)
                const elem = copy[index]
                copy[index] = {
                  ...elem,
                  data: {
                    ...elem.data,
                    ...newVal,
                  },
                }
                return copy
              }),
            onDelete: () =>
              setElements(prev => removeElements([{ id: newId }] as any, prev)),
          },
          position: { x: e.clientX - 0, y: e.clientY - 50 },
        } as Node<DialogueEntryNodeData>)
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
              fileName: 'out.dialogue.json',
              content: JSON.stringify(elements),
            })
          }}
        >
          Save
        </button>
        <button
          onClick={async () => {
            const text = await uploadFile()
            const json = JSON.parse(text)
            setElements(json)
          }}
        >
          Load
        </button>
      </div>
      <div className={styles.graph}>
        <ReactFlow
          elements={elements}
          onConnect={params => setElements(e => addEdge(params, e))}
          onElementsRemove={toRemove =>
            setElements(e => removeElements(toRemove, e))
          }
          deleteKeyCode={46} /*DELETE key*/
          snapToGrid
          snapGrid={[15, 15]}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  )
}

export default DialogueEditor