import { defineCustomElement }  from "vue"
import NoteAudio from "./NoteAudio.ce.vue"

const DuerNoteAudio = defineCustomElement(NoteAudio)

export { DuerNoteAudio }

export function register(tagName = 'note-audio') {
    customElements.define(tagName, DuerNoteAudio)
}