import { createContext, useContext, useState, ReactNode } from 'react'

export type Subject = 'DSA' | 'Web Dev' | 'DBMS' | 'OS' | 'Other'
export type Priority = 'Low' | 'Medium' | 'High'

export interface Session {
  id: string
  topic: string
  subject: Subject
  duration: number
  priority: Priority
  date: string
}

interface SessionContextType {
  sessions: Session[]
  addSession: (session: Omit<Session, 'id'>) => void
  deleteSession: (id: string) => void
}

const SessionContext = createContext<SessionContextType | null>(null)

export function SessionProvider({ children }: { children: ReactNode }) {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      topic: 'Binary Search Trees',
      subject: 'DSA',
      duration: 90,
      priority: 'High',
      date: new Date().toISOString().split('T')[0],
    },
    {
      id: '2',
      topic: 'React Context API',
      subject: 'Web Dev',
      duration: 60,
      priority: 'Medium',
      date: new Date().toISOString().split('T')[0],
    },
  ])

  const addSession = (session: Omit<Session, 'id'>) => {
    const newSession: Session = {
      ...session,
      id: crypto.randomUUID(),
    }
    setSessions(prev => [newSession, ...prev])
  }

  const deleteSession = (id: string) => {
    setSessions(prev => prev.filter(s => s.id !== id))
  }

  return (
    <SessionContext.Provider value={{ sessions, addSession, deleteSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSession must be used within SessionProvider')
  return ctx
}
