import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import '@blocknote/core/fonts/inter.css';
import './editor.css';

export default function Editor() {
    const editor = useCreateBlockNote();

    return <BlockNoteView editor={editor} className="w-full h-full" />;
}
