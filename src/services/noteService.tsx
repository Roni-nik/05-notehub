
import axios from "axios";

import type { Note, NewNote } from "../types/note";

export interface NoteSearchResponse {
    notes: Note[];
  totalPages: number;
}
axios.defaults.baseURL = "https://notehub-public.goit.study/api";
  const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;

export  async function fetchNotes(
  searchQuery: string,
  page: number
): Promise<NoteSearchResponse> {


  const response = await axios.get<NoteSearchResponse>(`/notes`, {
    headers: {
          Authorization: `Bearer ${myKey}`,
    },
    params: {
        ...(searchQuery && { search:searchQuery}),
    perPage: 12,
      page,
    },
  });
 
  
  return response.data;
}

export async function createNote(noteData: NewNote): Promise<Note> {
  const response = await axios.post<Note>(`/notes`, noteData, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
}


export async function deleteNote(id: number): Promise<Note> {
  const response = await axios.delete<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
}



// Функції для виконання HTTP - запитів винесіть в окремий 
// файл src / services / noteService.ts.
//  Типізуйте їх параметри, результат, який вони повертають, та відповідь від Axios.
//  У вас мають бути наступні функції:

// 
// createNote: має виконувати запит для створення нової нотатки на сервері. 
// Приймає вміст нової нотатки та повертає створену нотатку у відповіді;
// deleteNote: має виконувати запит для видалення нотатки за заданим ідентифікатором. 
// Приймає ID нотатки та повертає інформацію про видалену нотатку у відповіді.