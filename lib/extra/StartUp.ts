
interface Message {
    Context: string
}

export function Say(text: Message){
    console.log(text.Context)
}