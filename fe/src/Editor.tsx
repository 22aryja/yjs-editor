import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import '@blocknote/core/fonts/inter.css';
import './editor.css';
import * as Y from 'yjs';

const doc = new Y.Doc();

export default function Editor() {
    const editor = useCreateBlockNote();

    return <BlockNoteView editor={editor} className="w-full h-full" />;
}
