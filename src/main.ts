import '@logseq/libs'
import { optimize } from 'svgo'

logseq.ready(main).catch(console.error)

function main (): void {
  logseq.UI.showMsg('❤️  Message from Hello World Plugin :)')
}
