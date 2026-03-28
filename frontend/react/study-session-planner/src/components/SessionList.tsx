import { useSession } from '../context/SessionContext'
import SessionCard from './SessionCard'

export default function SessionList() {
  const { sessions } = useSession()

  const totalMinutes = sessions.reduce((sum, s) => sum + s.duration, 0)

  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div className="mb-6">
        <p className="font-mono text-xs text-ink-500 tracking-wider uppercase mb-2">Your Schedule</p>
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold text-ink-100">Sessions</h2>
          <div className="text-right">
            <p className="font-mono text-xs text-ink-500">Total study time</p>
            <p className="font-display font-bold text-ink-200 text-lg">
              {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
            </p>
          </div>
        </div>
        <div className="mt-3 h-px bg-gradient-to-r from-ink-600 to-transparent" />
      </div>

      {/* Count */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 rounded-md bg-ink-700 flex items-center justify-center">
          <span className="font-mono text-xs text-ink-300 font-bold">{sessions.length}</span>
        </div>
        <span className="text-xs font-mono text-ink-500">
          {sessions.length === 1 ? 'session' : 'sessions'}
        </span>
      </div>

      {/* Session Cards */}
      {sessions.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-ink-700 rounded-xl">
          <p className="font-display text-ink-600 text-lg font-semibold">No sessions yet</p>
          <p className="font-body text-ink-600 text-sm mt-1">Add your first study session →</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sessions.map((session, i) => (
            <SessionCard key={session.id} session={session} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
