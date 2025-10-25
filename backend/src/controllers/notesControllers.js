import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    }
    catch (error){ 
        console.error("algo deu errado com controller", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export async function createNote(req, res) {
   try{
    const {title, content} = req.body
    const newNote = new Note({
        title, content
    })

    const savedNote = await newNote.save()
    res.status(201).json({
        savedNote
    })
   } catch (error) {
    console.error("algo deu errado com controller", error)
        res.status(500).json({
            message: "Internal server error"
        })
   }
}

export async function updateNote(req, res) {
    try {
        const {title, content} = req.body

        await Note.findByIdAndUpdate(req.params.id, {title, content})
        res.status(200).json({message: "Atualização concluida"})
    } catch (error) {
        console.error("algo deu errado com controller", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export function deleteNote(req, res) {
    res.status(200).json({ message: "Nota apagada com sucesso!" });
}